import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../shared/services/group.service';
import { Group } from '../../shared/interfaces/group';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Field } from '../../shared/interfaces/fields';

@Component({
  selector: 'app-ml-field',
  templateUrl: './ml-field.component.html',
  styleUrls: ['./ml-field.component.css']
})
export class MlFieldComponent implements OnInit {
  formAddField: FormGroup;
  fields: Field[];
  errorMessage: String;
  fieldtype = [
    {name: 'TEXT'},
    {name: 'NUMBER'},
    {name: 'DATE'}
]; 
  constructor(private groupService: GroupService) {
    this.fields = [];
  }

  ngOnInit() {
    this.initFormAddField();
     this.getField();
  }
  initFormAddField() {
    this.formAddField = new FormGroup({
      title: new FormControl('', [Validators.required]) ,   
      type: new FormControl(this.fieldtype[0].name)      
    });
  }
  getField(){
    this.groupService.fields.subscribe(
      (success:any) => {
        if(!success) {
          this.groupService.getField().subscribe(
            (Fields)=>{
              console.log(Fields)
              this.fields=Fields
              this.groupService.setField(Fields);
            }
          );
        }
        else {
          this.fields=success;
        }
      }
    );
  }
  edit(id) {
    console.log('edit', id);
  }
  delete(id) {
    this.groupService.deleteField(id).subscribe(
      (success)=>{
        this.groupService.getField().subscribe(
          (Fields)=>{
            console.log(Fields)
            this.fields=Fields
            this.groupService.setField(Fields);
          }
        );
      }, (error)=>{
        console.log("error", error);
      }
    );
  }
  saveField() {
    const btnAddField = <HTMLInputElement><any>document.querySelector('#btnAddField');
    btnAddField.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
    btnAddField.disabled = true;
    this.groupService.addField(this.formAddField.value).subscribe(
      (success) => {
        btnAddField.textContent = 'Save';
        btnAddField.disabled = false;
        console.log(success)
        this.fields.push(success);
        this.groupService.setField(this.fields);
        this.initFormAddField();
      },
      (error:any) => {           
        btnAddField.textContent = 'Save';
        btnAddField.disabled = false;
        console.log(error)
        this.errorMessage = error.message;
      });
  }
}

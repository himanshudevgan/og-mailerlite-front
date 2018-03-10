import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../shared/services/group.service';
import { Group } from '../../shared/interfaces/group';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-ml-group',
  templateUrl: './ml-group.component.html',
  styleUrls: ['./ml-group.component.css']
})
export class MlGroupComponent implements OnInit {
  formAddGroup: FormGroup;
  groups: Group[];
  errorMessage: String;
  constructor(private groupService: GroupService) {
    this.groups = [];
  }

  ngOnInit() {
    this.initFormAddGroup();
    this.getGroup();
  }
  initFormAddGroup() {
    this.formAddGroup = new FormGroup({
      name: new FormControl('', [Validators.required])      
    });
  }
  getGroup(){
    this.groupService.groups.subscribe(
      (success: any) => {
        if(!success) {
          this.groupService.getGroup().subscribe(
            (groups)=>{
              this.groups=groups;
              this.groupService.setGroup(groups);
            }
          );
        } else {
          this.groups=success;
        }
      }
    );
  }
  edit(id) {
    console.log('edit', id);
  }
  delete(id) {
    this.groupService.deleteGroup(id).subscribe(
      (success)=>{
        this.groupService.getGroup().subscribe(
          (groups)=>{
            this.groups=groups;
            this.groupService.setGroup(groups);
          }
        );
        console.log("sucess", success);
        this.getGroup();
      }, (error)=>{
        console.log("error", error);
      }
    );
  }
  saveGroup() {
    const btnAddGroup = <HTMLInputElement><any>document.querySelector('#btnAddGroup');
    btnAddGroup.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
    btnAddGroup.disabled = true;
    this.groupService.addGroup(this.formAddGroup.value).subscribe(
      (success) => {
        btnAddGroup.textContent = 'Save';
        btnAddGroup.disabled = false;
        this.groups.push(success);
        this.groupService.setGroup(this.groups);
        this.initFormAddGroup();
      },
      (error:any) => {           
        btnAddGroup.textContent = 'Save';
        btnAddGroup.disabled = false;
        console.log(error)
        this.errorMessage = error.message;
      });
  }
}

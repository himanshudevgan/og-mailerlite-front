import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { BasicService } from '../../shared/services/basic.service';
import { Group } from '../../shared/interfaces/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groupForm: FormGroup;
  form: FormGroup;
  
  group: Group[];

  constructor(private groupservice:BasicService) { 
    this.group=[]
  }

  ngOnInit()  {
    this.getgroup();
    this.groupForm = new FormGroup({
      name: new FormControl('', [Validators.required ]),
    });
    this.form = new FormGroup({
      groupname: new FormControl(''),
    
    });
  }
    

  onFormSubmit(): void {
    this.groupservice.addgroup(this.groupForm.value).subscribe(
      (data) => {
        this.group.push(data.data);
       },
       (error:any) => {
         console.log(error)
         }
    );
    }
    getgroup(): void{
      this.groupservice.getgroup().subscribe(
        (group)=>{
          console.log(group)
          this.group=group.data
          console.log("----------------",this.group)
        }
      )
    }

}

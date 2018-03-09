import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GroupsComponent } from './groups.component';


@NgModule({
  declarations: [
      GroupsComponent

],
  imports: [
   
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: []
})
export class GroupModule { }

import { NgModule } from '@angular/core';
import { AppRoutes } from './../shared/routes/routes';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MailerliteComponent } from './mailerlite.component';
import { MlGroupComponent } from './ml-group/ml-group.component';
import { NavbarComponent } from './../shared/components/navbar/navbar.component';
import { MlFieldComponent } from './ml-field/ml-field.component';
@NgModule({
  imports: [
    CommonModule,
    AppRoutes,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [MailerliteComponent, MlGroupComponent, NavbarComponent,
    MlFieldComponent
]
})
export class MailerliteModule { }

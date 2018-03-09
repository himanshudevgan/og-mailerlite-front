import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutes } from './shared/routes/routes';
import { GroupsComponent } from './components/groups/groups.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupModule } from './components/groups/groups.module';
import { LoginComponent } from './components/login/login.component';
import { BasicService } from './shared/services/basic.service';
import { BaseService } from './shared/services/base.service';
import { CookieService } from './shared/services/cookie.service';


@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GroupModule
  ],
  providers: [BasicService,BaseService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

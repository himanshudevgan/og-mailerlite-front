import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutes, APP_ROUTER_PROVIDERS } from './shared/routes/routes';
import { MailerliteModule } from './mailerlite/mailerlite.module';
import { LoginComponent } from './shared/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MailerliteModule
  ],
  providers: [APP_ROUTER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../../shared/components/login/login.component';
import { MailerliteComponent } from '../../mailerlite/mailerlite.component';
import { AuthService } from './../services/auth.service';
import {MAILERLITE_ROUTER_PROVIDERS, MAILERLITE_ROUTES} from './mailerlite.route';
import { CookieService } from './../services/cookie.service';
import {LoginGuard} from '../guards/login.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    redirectTo: '',
    pathMatch: 'full'
  },
  ...MAILERLITE_ROUTES
];
 
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
export const APP_ROUTER_PROVIDERS = [
  AuthService,
  CookieService,
  LoginGuard,
  MAILERLITE_ROUTER_PROVIDERS
];
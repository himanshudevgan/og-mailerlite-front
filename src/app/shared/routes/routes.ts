import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from '../../components/groups/groups.component';
import { CalcComponent } from '../../components/calc/calc.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
const routes: Routes = [
  {  },
];

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: GroupsComponent,
   
   
  },
  {
    path: 'calc',
    component: CalcComponent,
   
  }, 
  {
    path: 'login',
    component: LoginComponent
   
  }, 
];
 
  export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

import {Routes} from '@angular/router';
import {MailerliteComponent} from '../../mailerlite/mailerlite.component';
import {MlGroupComponent} from '../../mailerlite/ml-group/ml-group.component';
import { GroupService } from './../services/group.service';
import {IsLoggedinGuard} from '../guards/is-loggedin.guard';
import { MlFieldComponent } from '../../mailerlite/ml-field/ml-field.component';
export const MAILERLITE_ROUTES: Routes = [
  {
    path: 'mailerlite',
    component: MailerliteComponent,
    canActivate: [IsLoggedinGuard],
    children: [
      {
        path: '',
        component: MlGroupComponent
      },
      {
        path: 'addfield',
        component: MlFieldComponent
      }
    ]
  }
];
export const MAILERLITE_ROUTER_PROVIDERS = [
  IsLoggedinGuard,
  GroupService
];

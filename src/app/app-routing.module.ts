import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {CaseoneComponent} from './caseone/caseone.component';
import { AuthGuardService } from './helper/auth-guard.service';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: '', component: CaseoneComponent},
  { path: 'error', component: ErrorComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

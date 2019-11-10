import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from './modules/registration-page/registration-page.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


const routes: Routes = [{
  path: 'registration',
  component: RegistrationPageComponent
}, {
  path: 'login',
  component: LoginPageComponent
},{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: '**',redirectTo: 'login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

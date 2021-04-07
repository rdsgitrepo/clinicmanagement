import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicManagementComponent } from './clinic-management/clinic-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"clinic-management", component:ClinicManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

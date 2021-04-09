import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClinicManagementComponent } from './clinic-management/clinic-management.component';
import { CreateNewClinicComponent } from './clinic-management/create-new-clinic/create-new-clinic.component';
import { ListAllClinicsComponent } from './clinic-management/list-all-clinics/list-all-clinics.component';
import { DuplicateClinicsComponent } from './clinic-management/duplicate-clinics/duplicate-clinics.component';
import { DeleteClinicsComponent } from './clinic-management/delete-clinics/delete-clinics.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './confirm-dialog.service';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClinicManagementComponent,
    CreateNewClinicComponent,
    ListAllClinicsComponent,
    DuplicateClinicsComponent,
    DeleteClinicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ConfirmDialogModule
  ],
  providers: [
    ConfirmDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

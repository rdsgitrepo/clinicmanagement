import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-management',
  templateUrl: './clinic-management.component.html',
  styleUrls: ['./clinic-management.component.css']
})
export class ClinicManagementComponent implements OnInit {
  tab:string;
  clinicList:any;
  clinic:any;
  slot:any;
  constructor() { }

  ngOnInit() {
    this.clinicList = [
      {
        clinicId:50,
        podName:"ALT Airport Concourse C(Pfizer)",
        dose:1,
        active:"Y",
        clinicDate:"18.03.2021",
        timeZone:"EST",
        state:"GA"
      },
      {
        clinicId:52,
        podName:"ALT Airport Concourse C(Pfizer)",
        dose:1,
        active:"Y",
        clinicDate:"18.03.2021",
        timeZone:"EST",
        state:"GA"
      },
      {
        clinicId:53,
        podName:"ALT Airport Concourse C(Pfizer)",
        dose:1,
        active:"Y",
        clinicDate:"18.03.2021",
        timeZone:"EST",
        state:"GA"
      },
      {
        clinicId:54,
        podName:"ALT Airport Concourse C(Pfizer)",
        dose:1,
        active:"Y",
        clinicDate:"18.03.2021",
        timeZone:"EST",
        state:"GA"
      },
      {
        clinicId:55,
        podName:"ALT Airport Concourse C(Pfizer)",
        dose:1,
        active:"Y",
        clinicDate:"18.03.2021",
        timeZone:"EST",
        state:"GA"
      },
      {
        clinicId:56,
        podName:"ALT Airport Concourse C(Pfizer)",
        dose:1,
        active:"Y",
        clinicDate:"18.03.2021",
        timeZone:"EST",
        state:"GA"
      },
      {
        clinicId:57,
        podName:"ALT Airport Concourse C(Pfizer)",
        dose:1,
        active:"Y",
        clinicDate:"18.03.2021",
        timeZone:"EST",
        state:"GA"
      },
      {
        clinicId:58,
        podName:"ALT Airport Concourse C(Pfizer)",
        dose:1,
        active:"Y",
        clinicDate:"18.03.2021",
        timeZone:"EST",
        state:"GA"
      },
      {
        clinicId:59,
        podName:"ALT Airport Concourse C(Pfizer)",
        dose:1,
        active:"Y",
        clinicDate:"18.03.2021",
        timeZone:"EST",
        state:"GA"
      }
    ]
    this.clinic = {
      isTwoDoseClinics:false
    };
    this.slot = {};
    this.tab = 'create-clinic';
  }
  openTab(tab){
    this.tab = tab;
  }
  editClinicChangedHandler(clinic){
    console.log("Clinic..........",clinic);
    
    this.clinic = clinic;
    this.openTab('create-clinic')
  }
  generateSlots(){
    this.slot = {
      clinicId:"52",
      clinicDate:"03/01/2021",
      startTime:"9:00:00 AM",
      remainingSlots:"30",
      slotId:"10"
    }
  }

}

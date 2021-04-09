import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/confirm-dialog.service';

@Component({
  selector: 'app-list-all-clinics',
  templateUrl: './list-all-clinics.component.html',
  styleUrls: ['./list-all-clinics.component.css']
})
export class ListAllClinicsComponent implements OnInit {
  clinicList:any;
  constructor(
    private confirmDialogService: ConfirmDialogService,
    private router: Router
    ) { }

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
    
  }

  deleteClinic(clinic){
    this.confirmDialogService.confirmThis("Are you sure to delete?", function () {  
      alert("Yes clicked");  
    }, function () {  
      alert("No clicked");  
    })
  }

  populateClinic(clinic){
    // this.router.navigate(["/clinic-management"]);
    
  }

}

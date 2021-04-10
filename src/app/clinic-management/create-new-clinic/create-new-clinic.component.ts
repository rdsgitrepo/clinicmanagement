import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-clinic',
  templateUrl: './create-new-clinic.component.html',
  styleUrls: ['./create-new-clinic.component.css']
})
export class CreateNewClinicComponent implements OnInit {
  @Input() clinic:any;
  slot:any;
  constructor() { }

  ngOnInit() {
    this.clinic.isTwoDoseClinics = false;
    this.slot = {};
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

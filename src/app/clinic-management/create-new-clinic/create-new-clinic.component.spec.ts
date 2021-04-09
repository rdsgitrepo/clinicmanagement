import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewClinicComponent } from './create-new-clinic.component';

describe('CreateNewClinicComponent', () => {
  let component: CreateNewClinicComponent;
  let fixture: ComponentFixture<CreateNewClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

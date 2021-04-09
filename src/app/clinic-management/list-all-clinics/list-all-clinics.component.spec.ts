import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllClinicsComponent } from './list-all-clinics.component';

describe('ListAllClinicsComponent', () => {
  let component: ListAllClinicsComponent;
  let fixture: ComponentFixture<ListAllClinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllClinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

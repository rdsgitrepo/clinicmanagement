import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClinicsComponent } from './delete-clinics.component';

describe('DeleteClinicsComponent', () => {
  let component: DeleteClinicsComponent;
  let fixture: ComponentFixture<DeleteClinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteClinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateClinicsComponent } from './duplicate-clinics.component';

describe('DuplicateClinicsComponent', () => {
  let component: DuplicateClinicsComponent;
  let fixture: ComponentFixture<DuplicateClinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateClinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

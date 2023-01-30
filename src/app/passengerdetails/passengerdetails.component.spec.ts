import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerdetailsComponent } from './passengerdetails.component';

describe('PassengerdetailsComponent', () => {
  let component: PassengerdetailsComponent;
  let fixture: ComponentFixture<PassengerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

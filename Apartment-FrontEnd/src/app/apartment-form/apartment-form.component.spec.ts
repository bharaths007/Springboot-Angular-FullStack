import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentFormComponent } from './apartment-form.component';

describe('ApartmentFormComponent', () => {
  let component: ApartmentFormComponent;
  let fixture: ComponentFixture<ApartmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

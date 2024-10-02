import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratCalculatorComponent } from './carat-calculator.component';

describe('CaratCalculatorComponent', () => {
  let component: CaratCalculatorComponent;
  let fixture: ComponentFixture<CaratCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaratCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaratCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

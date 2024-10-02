import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationTableComponent } from './calculation-table.component';

describe('CalculationTableComponent', () => {
  let component: CalculationTableComponent;
  let fixture: ComponentFixture<CalculationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculationTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

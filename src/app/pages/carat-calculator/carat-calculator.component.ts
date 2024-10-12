import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalculationTableComponent } from '../calculation-table/calculation-table.component';


@Component({
  selector: 'app-carat-calculator',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DecimalPipe,
    CurrencyPipe,
    CommonModule,
    InputNumberModule,
    CalculationTableComponent
  ],
  templateUrl: './carat-calculator.component.html',
  styleUrl: './carat-calculator.component.scss'
})
export class CaratCalculatorComponent {
  calculatorForm: FormGroup;
  totalCarats: number = 0;
  totalCost: number = 0;
  pricePerCarat: number = 0;
  storedResults: any[] = [];

  ngOnInit(): void {
    this.loadStoredResults();
  }

  constructor(private fb: FormBuilder) {
    this.calculatorForm = this.fb.group({
      carats: [null],
      acres: [null],
      pricePerCarat: [80]
    });
  }

  calculateTotal() {
    const carats = parseFloat(this.calculatorForm.get('carats')?.value) || 0;
    const acres = parseFloat(this.calculatorForm.get('acres')?.value) || 0;
    const pricePerCarat = parseFloat(this.calculatorForm.get('pricePerCarat')?.value) || 0;

    this.totalCarats = carats + (acres * 24);
    this.totalCost = this.totalCarats * pricePerCarat;

    const result = {
      date: new Date(),
      totalCarats: this.totalCarats,
      totalCost: this.totalCost,
      caratPrice: pricePerCarat
    };

    // Store the result
    this.storeResult(result);

    // Reset the form
    this.calculatorForm.get('carats')?.reset()
    this.calculatorForm.get('acres')?.reset()

  }

  storeResult(result: any) {
    this.storedResults.push(result);
    this.updateLocalStorage();
  }

  loadStoredResults() {
    const stored = localStorage.getItem('caratCalculatorResults');
    if (stored) {
      this.storedResults = JSON.parse(stored);
    }
  }


  getEvent(event: any) {
    this.storedResults = [];
    this.updateLocalStorage();
  }

  deleteRow(index: number) {
    this.storedResults.splice(index, 1);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('caratCalculatorResults', JSON.stringify(this.storedResults));
  }
}

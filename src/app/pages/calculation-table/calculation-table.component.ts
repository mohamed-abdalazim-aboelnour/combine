import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-calculation-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './calculation-table.component.html',
  styleUrl: './calculation-table.component.scss'
})
export class CalculationTableComponent {

  @Input() storedResults: any[] = []
  @Output() outputEvent = new EventEmitter()
  @Output() deleteRowEvent = new EventEmitter<number>()

  percentage80 = 0;
  percentage90 = 0;

  get getTotalCarats(): number {
    return this.storedResults.reduce((acc, result) => acc + result.totalCarats, 0);
  }

  get getTotalCost(): number {
    return this.storedResults.reduce((acc, result) => acc + result.totalCost, 0);
  }

  getTotalCaratsForPrice(price: number): number {
    return this.storedResults
      .filter(result => result.caratPrice === price)
      .reduce((acc, result) => acc + result.totalCarats, 0);
  }

  getTotalCostForPrice(price: number): number {
    return this.storedResults
      .filter(result => result.caratPrice === price)
      .reduce((acc, result) => acc + result.totalCost, 0);
  }

  clearStoredResults() {
    const userConfirmed = confirm("انت متأكد انك عاوز تمسح كل حاجه 🙄");
    if (userConfirmed) {
      this.outputEvent.emit('')
      localStorage.clear()
      location.reload()
    } 
  }

  calculatePercentage80(value: number) {
    const totalCost = this.getTotalCostForPrice(80);
    this.percentage80 = totalCost * ( value / 100);
    
  }
  calculatePercentage90(value: number) {
    const totalCost = this.getTotalCostForPrice(90);
    this.percentage90 = totalCost * ( value / 100);
  }

  deleteRow(index: number) {
    this.deleteRowEvent.emit(index);
  }

}

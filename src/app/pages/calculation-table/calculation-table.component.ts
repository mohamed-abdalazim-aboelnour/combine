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
  @Output() outPutEvent = new EventEmitter()

  get getTotalCarats(): number {
    return this.storedResults.reduce((acc, result) => acc + result.totalCarats, 0);
  }

  get getTotalCost(): number {
    return this.storedResults.reduce((acc, result) => acc + result.totalCost, 0);
  }

  clearStoredResults() {
    const userConfirmed = confirm("انت متأكد انك عاوز تمسح كل حاجه 🙄");
if (userConfirmed) {
  this.outPutEvent.emit('')
  localStorage.clear()
  location.reload()
} 
  }

}

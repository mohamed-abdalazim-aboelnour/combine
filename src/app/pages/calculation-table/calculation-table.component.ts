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

  get getTotalCarats(): number {
    return this.storedResults.reduce((acc, result) => acc + result.totalCarats, 0);
  }

  get getTotalCost(): number {
    return this.storedResults.reduce((acc, result) => acc + result.totalCost, 0);
  }

  clearStoredResults() {
    const userConfirmed = confirm("انت متأكد انك عاوز تمسح كل حاجه 🙄");
    if (userConfirmed) {
      this.outputEvent.emit('')
      localStorage.clear()
      location.reload()
    } 
  }

  deleteRow(index: number) {
    this.deleteRowEvent.emit(index);
  }

}

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CaratCalculatorComponent } from './pages/carat-calculator/carat-calculator.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    InputNumberModule,
    CaratCalculatorComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';
}

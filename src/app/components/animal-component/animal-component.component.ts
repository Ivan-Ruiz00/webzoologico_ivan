import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animal-component',
  imports: [
    FormsModule
  ],
  templateUrl: './animal-component.component.html',
  styleUrl: './animal-component.component.css'
})
export class AnimalComponentComponent {
  titulo="mi titulo"
}

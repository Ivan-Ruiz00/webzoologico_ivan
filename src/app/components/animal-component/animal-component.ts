import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-animal-component',
  imports: [],
  templateUrl: './animal-component.html',
  styleUrl: './animal-component.css',
})
export class AnimalComponent {
  animalList: any = [];
  constructor(
    private animalService: AnimalService,
    private toastr: ToastrService
  ) { }
  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  ngOnInit() {
    this.getAllAnimals();
  }
}

import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/shared/models/Car';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  cars: Car[] = [];
  fuelType: string = '';
  gearboxType: string = '';
  searchTerm: string = '';
  isLoggedIn: boolean;
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.searchTerm = params.searchTerm || '';
      this.updateCarsList();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchTerm && !changes.searchTerm.firstChange) {
      this.updateCarsList();
    }
  }



updateCarsList(): void {
    if (this.fuelType && this.gearboxType&& this.searchTerm!="") {
      this.carService.getAllCarsBySearchTermAndFuelAndGearboxType(this.searchTerm, this.fuelType, this.gearboxType)
        .subscribe(cars => this.cars = cars);
    } else if (this.fuelType&& this.searchTerm!="") {
      this.carService.getAllCarsBySearchTermAndFuelType(this.searchTerm, this.fuelType)
        .subscribe(cars => this.cars = cars);
    } else if (this.gearboxType&& this.searchTerm!="") {
      this.carService.getAllCarsBySearchTermAndGearboxType(this.searchTerm, this.gearboxType)
        .subscribe(cars => this.cars = cars);
      } else if (this.fuelType && this.gearboxType&& this.searchTerm=="") {
        this.carService.getAllCarsByFuelAndGearboxType(this.fuelType,this.gearboxType)
          .subscribe(cars => this.cars = cars);
    } else if (this.searchTerm==""&&this.fuelType) {
      this.carService.getAllCarsByFuelType(this.fuelType)
        .subscribe(cars => this.cars = cars);
      } else if (this.searchTerm==""&&this.gearboxType) {
        this.carService.getAllCarsByGearboxType(this.gearboxType)
          .subscribe(cars => this.cars = cars);
        } else if (this.searchTerm!="") {
          this.carService.getAllCarsBySearchTerm(this.searchTerm)
            .subscribe(cars => this.cars = cars);
    }else {
      this.carService.getAll().subscribe((serverCars)=>{
        this.cars = serverCars;
      });
    }


  }

}

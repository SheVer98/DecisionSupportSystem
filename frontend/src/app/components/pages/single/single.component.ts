import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/shared/models/Car';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  model: string = "";
  cena: number=0;
  moc: number=0;
  pojemnosc: number=0;
  przebieg: number=0;
  rok:number=0;
paliwo:string="";
skrzynia:string="";
  link: string = "";
  linka: string = "";
  cars: Car[] = [];

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute,private location: Location) {

  }
ngOnInit(): void {
  const id = this.activatedRoute.snapshot.paramMap.get('id');
  if (id !== null) {
    this.carService.getAll().subscribe(cars => {
      this.cars = cars;
    });

    const car = this.cars.find(s => s.id === id);
    if (car) {
      this.model = car.model;
      this.cena = car.cena;
      this.moc= car.moc;
      this.pojemnosc= car.pojemnosc;
      this.przebieg = car.przebieg;
      this.rok=car.rok;
      this.paliwo=car.paliwo;
      this.skrzynia=car.skrzynia;
      this.link=car.link;


    }
  }
}

goBack(): void {
  this.location.back();
}

}

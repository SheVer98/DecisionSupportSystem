import { Component, OnInit, ViewChild } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';
import { NgForm } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/shared/models/Car';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  cars:Car[]=[];
  niskaCena:number=0;
  sredniaCena:number=0;
  wysokaCena:number=0;
  bardzowysokaCena:number=0;
  slabaMoc: number=0;
  sredniaMoc: number=0;
  wysokaMoc: number=0;
  malaPojemnosc:number=0;
  duzaPojemnosc:number=0;
niskiPrzebieg:number=0;
sredniPrzebieg:number=0;
wysokiPrzebieg:number=0;
maxniska:number = 0;
 maxsrednia:number = 0;
 maxwysoka:number = 0;
 centroid:number=0;
 maxniska1:number = 0;
 maxsrednia1:number = 0;
 maxwysoka1:number = 0;
 centroid1:number=0;
 showDetails:boolean=false;
 showDetails2:boolean=false;
 fuelType:string = '';
 gearboxType:string = '';





  cena: number=0;
  moc: number=0;
  pojemnosc: number=0;
  przebieg: number=0;
  wybrane = [
    {  id: "", model: "", cena: 0, moc: 0, pojemnosc: 0, przebieg: 0, rok: 0, paliwo: 'Diesel', skrzynia: 'manualna', link: "", niskaocena: 0, sredniaocena: 0, wysokaocena: 0, suma: 100, centroid: 100, sumacentroid: 100 },

  ]

  wybraneSuma = [
    {  id: "", model: "", cena: 0, moc: 0, pojemnosc: 0, przebieg: 0, rok: 0, paliwo: 'Diesel', skrzynia: 'manualna', link: "", niskaocena: 0, sredniaocena: 0, wysokaocena: 0, suma: 100, centroid: 100, sumacentroid: 100 },

  ]

  wybraneSumaCentroid = [
    {  id: "", model: "", cena: 0, moc: 0, pojemnosc: 0, przebieg: 0, rok: 0, paliwo: 'Diesel', skrzynia: 'manualna', link: "", niskaocena: 0, sredniaocena: 0, wysokaocena: 0, suma: 100, centroid: 100, sumacentroid: 100 },

  ]

  constructor(private functionsServices:FunctionsService, private carService:CarService){

  }


  ngOnInit(): void {
    if (this.fuelType && this.gearboxType) {
      this.carService.getAllCarsByFuelAndGearboxType(this.fuelType, this.gearboxType).subscribe((serverCars)=>{
        this.cars = serverCars;
      });
    } else if (this.fuelType) {
      this.carService.getAllCarsByFuelType(this.fuelType).subscribe((serverCars)=>{
        this.cars = serverCars;
      });
    } else if (this.gearboxType) {
      this.carService.getAllCarsByGearboxType(this.gearboxType).subscribe((serverCars)=>{
        this.cars = serverCars;
      });
    } else {
      this.carService.getAll().subscribe((serverCars)=>{
        this.cars = serverCars;
      });
    }
  }




  @ViewChild('myForm')
  form!: NgForm;

  wybierz(){
  // Funkcje przynależności dla zmiennej "moc"
  this.wybrane.splice(0, this.wybrane.length);
  this.cena=this.form.value.cena;
this.moc=this.form.value.moc;
this.pojemnosc=this.form.value.pojemnosc;
this.przebieg=this.form.value.przebieg;

// this.niskaCena=this.functionsServices.niskaCena(this.form.value.cena);
// this.sredniaCena=this.functionsServices.sredniaCena(this.form.value.cena);
// this.wysokaCena=this.functionsServices.wysokaCena(this.form.value.cena);
// this.bardzowysokaCena=this.functionsServices.bardzowysokaCena(this.form.value.cena);
//  this.slabaMoc=this.functionsServices.slabaMoc(this.form.value.moc);
//  this.sredniaMoc=this.functionsServices.sredniaMoc(this.form.value.moc);
//  this.wysokaMoc=this.functionsServices.wysokaMoc(this.form.value.moc);
//  this.malaPojemnosc=this.functionsServices.malaPojemnosc(this.form.value.pojemnosc);
//  this.duzaPojemnosc=this.functionsServices.duzaPojemnosc(this.form.value.pojemnosc);
//  this.niskiPrzebieg=this.functionsServices.niskiPrzebieg(this.form.value.przebieg);
//  this.sredniPrzebieg=this.functionsServices.sredniPrzebieg(this.form.value.przebieg);
//  this.wysokiPrzebieg=this.functionsServices.wysokiPrzebieg(this.form.value.przebieg);

 if (this.fuelType && this.gearboxType) {
  this.carService.getAllCarsByFuelAndGearboxType(this.fuelType, this.gearboxType).subscribe((serverCars)=>{
    this.cars = serverCars;
  });
} else if (this.fuelType) {
  this.carService.getAllCarsByFuelType(this.fuelType).subscribe((serverCars)=>{
    this.cars = serverCars;
  });
} else if (this.gearboxType) {
  this.carService.getAllCarsByGearboxType(this.gearboxType).subscribe((serverCars)=>{
    this.cars = serverCars;
  });
} else {
  this.carService.getAll().subscribe((serverCars)=>{
    this.cars = serverCars;
  });
}






this.maxniska = 0;
 this.maxsrednia = 0;
 this.maxwysoka = 0;

let rules = [
  [this.functionsServices.bardzowysokaCena(this.form.value.cena), this.functionsServices.wysokiPrzebieg(this.form.value.przebieg), "niskaocena"],
  [this.functionsServices.slabaMoc(this.form.value.moc), this.functionsServices.malaPojemnosc(this.form.value.pojemnosc), "niskaocena"],
  [this.functionsServices.wysokaCena(this.form.value.cena), this.functionsServices.slabaMoc(this.form.value.moc), "niskaocena"],
  [this.functionsServices.malaPojemnosc(this.form.value.pojemnosc), this.functionsServices.wysokiPrzebieg(this.form.value.przebieg), "niskaocena"],
  [this.functionsServices.sredniaCena(this.form.value.cena), this.functionsServices.malaPojemnosc(this.form.value.pojemnosc), "sredniaocena"],
  [this.functionsServices.sredniaMoc(this.form.value.moc), this.functionsServices.duzaPojemnosc(this.form.value.pojemnosc), "sredniaocena"],
  [this.functionsServices.wysokaCena(this.form.value.cena), this.functionsServices.sredniPrzebieg(this.form.value.przebieg), "sredniaocena"],
  [this.functionsServices.wysokaMoc(this.form.value.moc), this.functionsServices.wysokiPrzebieg(this.form.value.przebieg), "sredniaocena"],
  [this.functionsServices.sredniaCena(this.form.value.cena), this.functionsServices.duzaPojemnosc(this.form.value.pojemnosc), "wysokaocena"],
  [this.functionsServices.sredniaMoc(this.form.value.moc), this.functionsServices.niskiPrzebieg(this.form.value.przebieg), "wysokaocena"],
  [this.functionsServices.niskaCena(this.form.value.cena), this.functionsServices.sredniPrzebieg(this.form.value.przebieg), "wysokaocena"],
  [this.functionsServices.wysokaMoc(this.form.value.moc), this.functionsServices.duzaPojemnosc(this.form.value.pojemnosc), "wysokaocena"]
];




      // Znajdź maksymalną wartość z reguł odpowiadających podanym parametrom

      for (let i = 0; i < rules.length; i += 1) {
        let rule = rules[i];
        let val = Math.min(Number(rule[0]), Number(rule[1]));
        if (rule[2] == "niskaocena") {
          if (val >= this.maxniska)
            this.maxniska = val;



        }
        if (rule[2] == "sredniaocena") {
          if (val >= this.maxsrednia)
           this.maxsrednia = val;

        }
        if (rule[2] == "wysokaocena") {
          if (val >= this.maxwysoka)
            this.maxwysoka = val;
        }
      }

      //  this.centroid = ( this.maxniska * 25 + this.maxsrednia * 50 + this.maxwysoka * 75) / ( this.maxniska + this.maxsrednia + this.maxwysoka)
       this.centroid = ( this.maxniska * 18.75 + this.maxsrednia * 50 + this.maxwysoka * 81.25) / ( this.maxniska + this.maxsrednia + this.maxwysoka)



       for (let car of this.cars){

        let rules1 = [
          [this.functionsServices.bardzowysokaCena(car.cena), this.functionsServices.wysokiPrzebieg(car.przebieg), "niskaocena"],
          [this.functionsServices.slabaMoc(car.moc), this.functionsServices.malaPojemnosc(car.pojemnosc), "niskaocena"],
          [this.functionsServices.wysokaCena(car.cena), this.functionsServices.slabaMoc(car.moc), "niskaocena"],
          [this.functionsServices.malaPojemnosc(car.pojemnosc), this.functionsServices.wysokiPrzebieg(car.przebieg), "niskaocena"],
          [this.functionsServices.sredniaCena(car.cena), this.functionsServices.malaPojemnosc(car.pojemnosc), "sredniaocena"],
          [this.functionsServices.sredniaMoc(car.moc), this.functionsServices.duzaPojemnosc(car.pojemnosc), "sredniaocena"],
          [this.functionsServices.wysokaCena(car.cena), this.functionsServices.sredniPrzebieg(car.przebieg), "sredniaocena"],
          [this.functionsServices.wysokaMoc(car.moc), this.functionsServices.wysokiPrzebieg(car.przebieg), "sredniaocena"],
          [this.functionsServices.sredniaCena(car.cena), this.functionsServices.duzaPojemnosc(car.pojemnosc), "wysokaocena"],
          [this.functionsServices.sredniaMoc(car.moc), this.functionsServices.niskiPrzebieg(car.przebieg), "wysokaocena"],
          [this.functionsServices.niskaCena(car.cena), this.functionsServices.sredniPrzebieg(car.przebieg), "wysokaocena"],
          [this.functionsServices.wysokaMoc(car.moc), this.functionsServices.duzaPojemnosc(car.pojemnosc), "wysokaocena"]
        ];



        this.maxniska1 = 0;
        this.maxsrednia1 = 0;
        this.maxwysoka1 = 0;
        for (var i = 0; i < rules1.length; i++) {
          var rule1 = rules1[i];
          let val = Math.min(Number(rule1[0]), Number(rule1[1]));

          if (rule1[2] == "niskaocena") {
            if (val >= this.maxniska1)
              this.maxniska1 = val;



          }
          if (rule1[2] == "sredniaocena") {
            if (val >=  this.maxsrednia1)
            this.maxsrednia1 = val;

          }
          if (rule1[2] == "wysokaocena") {
            if (val >= this.maxwysoka1)
            this.maxwysoka1 = val;
          }
        }

        // Odleglosc euklidesowa zmiennych wyjsciowych
        let e1 = Math.abs(this.maxniska - this.maxniska1);
        let e2 = Math.abs(this.maxsrednia - this.maxsrednia1);
        let e3 = Math.abs(this.maxwysoka - this.maxwysoka1);
        let suma = e1 + e2 + e3;
        // let centroid1 = (this.maxniska1 * 25 + this.maxsrednia1 * 50 + this.maxwysoka1 * 75) / (this.maxniska1 + this.maxsrednia1 + this.maxwysoka1);
        let centroid1 = (this.maxniska1 * 18.75 + this.maxsrednia1 * 50 + this.maxwysoka1 * 81.25) / (this.maxniska1 + this.maxsrednia1 + this.maxwysoka1);
        let sumacentroid = Math.abs(this.centroid - centroid1);



        this.wybrane.push({
          id: car.id,
          model: car.model,
          cena: car.cena,
          moc: car.moc,
          pojemnosc: car.pojemnosc,
          przebieg: car.przebieg,
          rok: car.rok,
          paliwo: car.paliwo,
          skrzynia: car.skrzynia,
          link: car.link,
          niskaocena: this.maxniska1,
          sredniaocena: this.maxsrednia1,
          wysokaocena: this.maxwysoka1,
          suma:suma,
          centroid: centroid1,
          sumacentroid: sumacentroid
        });
       }

       this.wybraneSuma = this.wybrane.slice();
       this.wybraneSumaCentroid = this.wybrane.slice();

       this.wybraneSuma.sort((a, b) => a.suma - b.suma);
       this.wybraneSumaCentroid.sort((a, b) => a.sumacentroid - b.sumacentroid);


  }



}

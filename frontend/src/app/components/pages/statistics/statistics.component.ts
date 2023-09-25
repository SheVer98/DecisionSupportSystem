import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { Car } from 'src/app/shared/models/Car';
import Chart, { ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
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
 showDetails:boolean=false;
 showDetails2:boolean=false;
 showDetails3:boolean=false;
 showDetails4:boolean=true;
 showDetails5:boolean=false;
 fuelType:string = '';
 gearboxType:string = '';

  cena: number=0;
  moc: number=0;
  pojemnosc: number=0;
  przebieg: number=0;
  wybrane = [
    { id: "", model: "", cena: 0, moc: 0, pojemnosc: 0, przebieg: 0, rok: 0, paliwo: 'Diesel', skrzynia: 'manualna', link: "", niskaCena:0, sredniaCena:0, wysokaCena:0, bardzowysokaCena:0,slabaMoc:0,sredniaMoc:0,wysokaMoc:0,
    malaPojemnosc:0,duzaPojemnosc:0,niskiPrzebieg:0,sredniPrzebieg:0,wysokiPrzebieg:0,niskaocena: 0, sredniaocena: 0, wysokaocena: 0, centroid: 100 },
  ]

  constructor(private functionsServices:FunctionsService, private carService:CarService){

  }


  ngOnInit(): void {
    this.carService.getAll().subscribe(cars => {
      this.cars = cars;
    });
    this.showDetails3 = true;
  }
  onHideChart() {
    this.showDetails3 = false;
  }

  onShowChart() {
    this.showDetails3 = true;
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const data = {
      labels: [] as number[],
      datasets: [
        {
          label: 'Ocena',
          data: [] as number[],
          borderColor: 'red',
          fill: false
        }
      ]
    };

    for (let i = 2; i <= 100; i += 1) {
      data.labels.push(i);
    }

    for (const { centroid } of this.wybrane) {
      data.datasets[0].data.push(centroid);
    }

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 18 // Zmieniamy rozmiar czcionki na osi Y
            }
          },
          title: {
            display: true,
            text: 'Ocena', // Tytuł osi Y
            font: {
              size: 28 // Zmieniamy rozmiar czcionki tytułu osi Y
            }
          }
        },
        x: {
          ticks: {
            font: {
              size: 18 // Zmieniamy rozmiar czcionki na osi X
            }
          },
          title: {
            display: true,
            text: 'Kolejne samochody', // Tytuł osi X
            font: {
              size: 28 // Zmieniamy rozmiar czcionki tytułu osi X
            }
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Wartości zmiennej wyjściowej Ocena dla samochodów z Bazy Danych',
          font: {
            size: 32
          }
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            font: {
              size: 28 // Zmieniamy rozmiar czcionki w legendzie
            }
          }
        }
      }
    } as ChartOptions; // Jawnie konwertujemy na ChartOptions

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  }






  @ViewChild('myForm')
  form!: NgForm;

  wybierz(){
  // Funkcje przynależności dla zmiennej "moc"
  this.wybrane.splice(0, this.wybrane.length);
  this.showDetails=true;
  this.showDetails4=false;
  this.showDetails5=true;



       for (let car of this.cars){
        let rules = [
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




        this.maxniska = 0;
        this.maxsrednia = 0;
        this.maxwysoka = 0;
        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i];
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

        //let centroid = (this.maxniska * 25 + this.maxsrednia * 50 + this.maxwysoka * 75) / (this.maxniska + this.maxsrednia + this.maxwysoka);
        let centroid = (this.maxniska * 18.75 + this.maxsrednia * 50 + this.maxwysoka * 81.25) / (this.maxniska + this.maxsrednia + this.maxwysoka);



        // if (this.maxniska >= this.maxsrednia && this.maxniska >= this.maxwysoka) {
        //   for (let x = 0; x < 100; x += 1) {
        //     if (this.functionsServices.niskaOcena1(x) <= this.maxniska) {
        //       centroid = x;
        //       break; // Przerwij wykonywanie pętli
        //     }
        //   }
        // } else if (this.maxsrednia >= this.maxniska && this.maxsrednia >= this.maxwysoka) {
        //   for (let x = 0; x < 100; x += 1) {
        //     if (this.functionsServices.sredniaOcena1(x) >= this.maxsrednia) {
        //       centroid = x;
        //       break; // Przerwij wykonywanie pętli
        //     }
        //   }
        // } else {
        //   for (let x = 0; x < 100; x += 1) {
        //     if (this.functionsServices.wysokaOcena1(x) >= this.maxwysoka) {
        //       centroid = x;
        //       break; // Przerwij wykonywanie pętli
        //     }
        //   }
        // }


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
          niskaCena: this.functionsServices.niskaCena(car.cena),
          sredniaCena:this.functionsServices.sredniaCena(car.cena),
          wysokaCena:this.functionsServices.wysokaCena(car.cena),
          bardzowysokaCena:this.functionsServices.bardzowysokaCena(car.cena),
          slabaMoc:this.functionsServices.slabaMoc(car.moc),
          sredniaMoc:this.functionsServices.sredniaMoc(car.moc),
          wysokaMoc:this.functionsServices.wysokaMoc(car.moc),
          malaPojemnosc:this.functionsServices.malaPojemnosc(car.pojemnosc),
          duzaPojemnosc:this.functionsServices.duzaPojemnosc(car.pojemnosc),
          niskiPrzebieg:this.functionsServices.niskiPrzebieg(car.przebieg),
          sredniPrzebieg:this.functionsServices.sredniPrzebieg(car.przebieg),
          wysokiPrzebieg:this.functionsServices.wysokiPrzebieg(car.przebieg),
          niskaocena: this.maxniska,
          sredniaocena: this.maxsrednia,
          wysokaocena: this.maxwysoka,
          centroid: centroid,
        });


       }
       this.wybrane.sort((a, b) => b.centroid - a.centroid);




  }

}


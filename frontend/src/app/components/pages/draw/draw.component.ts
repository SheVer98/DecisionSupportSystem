import { Component, OnInit, ViewChild } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  constructor(private functionsServices:FunctionsService){

  }

  ngOnInit(): void {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const data = {
      labels: [1000] as number[],
      datasets: [
        {
          label: 'niska cena',
          data: [] as number[],
          borderColor: 'red',
          fill: false
        },
        {
          label: 'srednia cena',
          data: [] as number[],
          borderColor: 'blue',
          fill: false
        },
        {
          label: 'wysoka cena',
          data: [] as number[],
          borderColor: 'green',
          fill: false
        },
        {
          label: 'bardzowysoka cena',
          data: [] as number[],
          borderColor: 'orange',
          fill: false
        }
      ]
    };

    for (let i = 0; i <= 100; i += 1) {
      data.labels.push(i);
      data.datasets[0].data.push(this.functionsServices.niskaCena1(i));
      data.datasets[1].data.push(this.functionsServices.sredniaCena1(i));
      data.datasets[2].data.push(this.functionsServices.wysokaCena1(i));
      data.datasets[3].data.push(this.functionsServices.bardzowysokaCena1(i));
    }

    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Funkcje przynaleznosci zmiennej wejsciowej: Cena',
          font: {
            size: 18
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });


    const canvas2 = document.getElementById('myChart2') as HTMLCanvasElement;
    const ctx2 = canvas2.getContext('2d') as CanvasRenderingContext2D;

    const data2 = {
      labels: [] as number[],
      datasets: [
        {
          label: 'slaba moc',
          data: [] as number[],
          borderColor: 'red',
          fill: false
        },
        {
          label: 'srednia moc',
          data: [] as number[],
          borderColor: 'blue',
          fill: false
        },
        {
          label: 'wysoka moc',
          data: [] as number[],
          borderColor: 'green',
          fill: false
        }
      ]
    };

    for (let i = 0; i <= 250; i += 1) {
      data2.labels.push(i);
      data2.datasets[0].data.push(this.functionsServices.slabaMoc(i));
      data2.datasets[1].data.push(this.functionsServices.sredniaMoc(i));
      data2.datasets[2].data.push(this.functionsServices.wysokaMoc(i));
    }

    const options2 = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Funkcje przynaleznosci zmiennej wejsciowej: Moc',
          font: {
            size: 18
          }
        }
      }
    };

    new Chart(ctx2, {
      type: 'line',
      data: data2,
      options: options2
    });


    const canvas3 = document.getElementById('myChart3') as HTMLCanvasElement;
    const ctx3 = canvas3.getContext('2d') as CanvasRenderingContext2D;

    const data3 = {
      labels: [] as number[],
      datasets: [
        {
          label: 'malaPojemnosc',
          data: [] as number[],
          borderColor: 'red',
          fill: false
        },
        {
          label: 'duzaPojemnosc',
          data: [] as number[],
          borderColor: 'blue',
          fill: false
        }

      ]
    };

    for (let i = 0; i <= 3000; i += 1) {
      data3.labels.push(i);
      data3.datasets[0].data.push(this.functionsServices.malaPojemnosc(i));
      data3.datasets[1].data.push(this.functionsServices.duzaPojemnosc(i));
    }

    const options3 = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Funkcje przynaleznosci zmiennej wejsciowej: Pojemnosc',
          font: {
            size: 18
          }
        }
      }
    };

    new Chart(ctx3, {
      type: 'line',
      data: data3,
      options: options3
    });

    const canvas4 = document.getElementById('myChart4') as HTMLCanvasElement;
    const ctx4 = canvas4.getContext('2d') as CanvasRenderingContext2D;

    const data4 = {
      labels: [] as number[],
      datasets: [
        {
          label: 'niskiPrzebieg',
          data: [] as number[],
          borderColor: 'red',
          fill: false
        },
        {
          label: 'sredniPrzebieg',
          data: [] as number[],
          borderColor: 'blue',
          fill: false
        },
        {
          label: 'wysokiPrzebieg',
          data: [] as number[],
          borderColor: 'green',
          fill: false
        }
      ]
    };

    for (let i = 0; i <= 300; i += 1) {
      data4.labels.push(i);
      data4.datasets[0].data.push(this.functionsServices.niskiPrzebieg(i));
      data4.datasets[1].data.push(this.functionsServices.sredniPrzebieg(i));
      data4.datasets[2].data.push(this.functionsServices.wysokiPrzebieg(i));
    }

    const options4 = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Funkcje przynaleznosci zmiennej wejsciowej: Przebieg',
          font: {
            size: 18
          }
        }
      }
    };

    new Chart(ctx4, {
      type: 'line',
      data: data4,
      options: options4
    });


    const canvas5 = document.getElementById('myChart5') as HTMLCanvasElement;
    const ctx5 = canvas5.getContext('2d') as CanvasRenderingContext2D;

    const data5 = {
      labels: [] as number[],
      datasets: [
        {
          label: 'niskaOcena',
          data: [] as number[],
          borderColor: 'red',
          fill: false
        },
        {
          label: 'sredniaOcena',
          data: [] as number[],
          borderColor: 'blue',
          fill: false
        },
        {
          label: 'wysokaOcena',
          data: [] as number[],
          borderColor: 'green',
          fill: false
        }
      ]
    };

    for (let i = 0; i <= 100; i += 1) {
      data5.labels.push(i);
      data5.datasets[0].data.push(this.functionsServices.niskaOcena1(i));
      data5.datasets[1].data.push(this.functionsServices.sredniaOcena1(i));
      data5.datasets[2].data.push(this.functionsServices.wysokaOcena1(i));
    }

    const options5 = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Funkcje przynaleznosci zmiennej wyjsciowej: Ocena',
          font: {
            size: 18
          }
        }
      }
    };

    new Chart(ctx5, {
      type: 'line',
      data: data5,
      options: options5
    });



  }

}


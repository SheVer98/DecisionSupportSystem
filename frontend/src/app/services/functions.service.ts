import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {




  // Funkcje przynależności dla zmiennej "cena"
 niskaCena(x:number) {
    if (x >= 0 && x <= 10000) {
      return 1;
    } else if (x > 10000 && x < 20000) {
      return (20000 - x) / 10000;
    } else {
      return 0;
    }
  }


sredniaCena(x:number) {
    if (x >= 5000 && x <= 25000) {
      return (x - 5000) / 20000;
    } else if (x > 25000 && x < 45000) {
      return (45000 - x) / 20000;
    } else {
      return 0;
    }
  }


wysokaCena(x:number) {
    if (x >= 25000 && x <= 45000) {
      return (x - 25000) / 20000;
    } else if (x > 45000 && x < 65000) {
      return (65000 - x) / 20000;
    } else {
      return 0;
    }
  }


bardzowysokaCena(x:number) {
    if (x >= 50000 && x <= 70000) {
      return (x - 50000) / 20000;
    } else if (x > 70000) {
      return 1;
    } else {
      return 0;
    }
  }



  // Funkcje przynależności dla zmiennej "moc"
slabaMoc(x:number) {
    if (x >= 0 && x <= 100) {
      return 1;
    } else if (x > 100 && x < 130) {
      return (130 - x) / 30;
    } else {
      return 0;
    }
  }

sredniaMoc(x:number) {
    if (x >= 80 && x <= 140) {
      return (x - 80) / 60;
    } else if (x > 140 && x < 200) {
      return (200 - x) / 60;
    } else {
      return 0;
    }
  }

wysokaMoc(x:number) {
    if (x >= 140 && x <= 190) {
      return (x - 140) / 50;
    } else if (x > 190) {
      return 1;
    } else {
      return 0;
    }
  }


  // Funkcje przynależności dla zmiennej "pojemność"
malaPojemnosc(x:number) {
    if (x >= 0 && x <= 1500) {
      return 1;
    } else if (x > 1500 && x < 2200) {
      return (2200 - x) / 700;
    } else {
      return 0;
    }
  }


duzaPojemnosc(x:number) {
    if (x >= 1500 && x <= 2200) {
      return (x - 1500) / 700;
    } else if (x > 2200) {
      return 1;
    } else {
      return 0;
    }
  }


  // Funkcje przynależności dla zmiennej "przebieg"
niskiPrzebieg(x:number) {
    if (x >= 0 && x <= 110) {
      return 1;
    } else if (x > 110 && x < 180) {
      return (180 - x) / 70;
    } else {
      return 0;
    }
  }

sredniPrzebieg(x:number) {
    if (x >= 130 && x <= 200) {
      return (x - 130) / 70;
    } else if (x > 200 && x < 270) {
      return (270 - x) / 70;
    } else {
      return 0;
    }
  }

wysokiPrzebieg(x:number) {
    if (x >= 200 && x <= 250) {
      return (x - 200) / 50;
    } else if (x > 250) {
      return 1;
    } else {
      return 0;
    }
  }

niskaCena1(x:number) {
    if (x >= 0 && x <= 10) {
      return 1;
    } else if (x > 10 && x < 20) {
      return (20 - x) / 10;
    } else {
      return 0;
    }
  }

sredniaCena1(x:number) {
    if (x >= 5 && x <= 25) {
      return (x - 5) / 20;
    } else if (x > 25 && x < 45) {
      return (45 - x) / 20;
    } else {
      return 0;
    }
  }


wysokaCena1(x:number) {
    if (x >= 25 && x <= 45) {
      return (x - 25) / 20;
    } else if (x > 45 && x < 65) {
      return (65 - x) / 20;
    } else {
      return 0;
    }
  }

bardzowysokaCena1(x:number) {
    if (x >= 50 && x <= 70) {
      return (x - 50) / 20;
    } else if (x > 70) {
      return 1;
    } else {
      return 0;
    }
  }

niskaOcena(x:number) {
    if (x >= 0 && x <= 25) {
      return (x - 0) / 25;
    } else if (x > 25 && x < 50) {
      return (50 - x) / 25;
    } else {
      return 0;
    }
  }

 sredniaOcena(x:number) {
    if (x >= 25 && x <= 50) {
      return (x - 25) / 25;
    } else if (x > 50 && x < 75) {
      return (75 - x) / 25;
    } else {
      return 0;
    }
  }

wysokaOcena(x:number) {
    if (x >= 50 && x <= 75) {
      return (x - 50) / 25;
    } else if (x > 75 && x < 100) {
      return (100 - x) / 25;
    } else {
      return 0;
    }
  }



 niskaOcena1(x:number) {
  if (x >= 0 && x <= 25) {
    return 1;
  } else if (x > 25 && x < 50) {
    return (50 - x) / 25;
  } else {
    return 0;
  }
}

sredniaOcena1(x:number) {
  if (x >= 25 && x <= 50) {
    return (x - 25) / 25;
  } else if (x > 50 && x < 75) {
    return (75 - x) / 25;
  } else {
    return 0;
  }
}

wysokaOcena1(x:number) {
  if (x >= 50 && x <= 75) {
    return (x - 50) / 25;
  } else if (x > 75) {
    return 1;
  } else {
    return 0;
  }
}



  constructor() { }
}

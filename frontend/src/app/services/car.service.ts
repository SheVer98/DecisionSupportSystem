import { Injectable } from '@angular/core';
import { Car } from '../shared/models/Car';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CARS_BY_SEARCH_URL, CARS_URL } from '../shared/models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

getAll(): Observable<Car[]>{
return this.http.get<Car[]>(CARS_URL);
}

getAllCarsBySearchTerm(searchTerm:string){
  return this.http.get<Car[]>(CARS_BY_SEARCH_URL +searchTerm);

}

getAllCarsByFuelType(fuelType: string): Observable<Car[]> {
  return this.http.get<Car[]>(CARS_URL + '/fuel/' + fuelType);
}




getAllCarsByGearboxType(gearboxType: string): Observable<Car[]> {
  return this.http.get<Car[]>(CARS_URL + '/gearbox/' + gearboxType);
}

getAllCarsByFuelAndGearboxType(fuelType: string, gearboxType: string): Observable<Car[]> {
  return this.http.get<Car[]>(CARS_URL + '/fuel/' + fuelType + '/gearbox/' + gearboxType);
}

getAllCarsBySearchTermAndFuelType(searchTerm: string, fuelType: string): Observable<Car[]> {
  return this.http.get<Car[]>(CARS_BY_SEARCH_URL + searchTerm + '/fuel/' + fuelType);
}

getAllCarsBySearchTermAndGearboxType(searchTerm: string, gearboxType: string): Observable<Car[]> {
  return this.http.get<Car[]>(CARS_BY_SEARCH_URL + searchTerm + '/gearbox/' + gearboxType);
}

getAllCarsBySearchTermAndFuelAndGearboxType(searchTerm: string, fuelType: string, gearboxType: string): Observable<Car[]> {
  return this.http.get<Car[]>(CARS_BY_SEARCH_URL + searchTerm + '/fuel/' + fuelType + '/gearbox/' + gearboxType);
}

// addCar(car: Car) {

//   cars.push(car);
// }





}


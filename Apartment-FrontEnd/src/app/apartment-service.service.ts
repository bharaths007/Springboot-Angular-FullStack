import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apartment } from '../app/apartment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentServiceService {
  private apartmentURL : string;

  constructor(private http: HttpClient) {
    this.apartmentURL = "http://localhost:8080/apartments";
  }

  public findAll(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(this.apartmentURL);
  }

  public save(apartment: Apartment) {
    return this.http.post<Apartment>("http://localhost:8080/add", apartment);
  }

  public deleteApartment(id : number) {
    return this.http.delete('http://localhost:8080/apartment/' + id);
  }

  public updateApartment(id: number, apartment: Apartment) {
    return this.http.put<Apartment>("http://localhost:8080/update/" + id, apartment); 
    // console.log(apartment.appartmentName);
  }

}

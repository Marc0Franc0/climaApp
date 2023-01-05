import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClimaService {

  apiKey:string='d899c164956bff881b1429d1b0a4ac9c';
 path:string = '';
  constructor(private http:HttpClient) {

   this.path=`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
  }

   obtenerClima(cityName:string,countryCode:string){
return this.http.get(`${this.path}${cityName},${countryCode}`)
  }
}

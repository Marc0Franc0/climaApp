import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiClimaService } from './services/api-clima.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'climaApp';
  clima:any;
  constructor(private climaService:ApiClimaService){}

  submitLocation(cityName:HTMLInputElement,countryCode:HTMLInputElement){
    if(cityName.value && countryCode.value){
         this.getClima(cityName.value,countryCode.value);
          cityName.value='';
    countryCode.value='';
    this.clima=null;
    }else{alert("Faltan datos a ingresar")}


    cityName.focus();
    return true;
    }

    getClima(cityName:string,countryCode:string){
this.climaService.obtenerClima(cityName,countryCode).subscribe(res=>{console.log(res),this.clima=res})

    }

}

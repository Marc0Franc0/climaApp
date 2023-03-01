import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiClimaService } from './services/api-clima.service';
import Swal from 'sweetalert2'
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
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal',
        text: 'Faltan datos a ingresar',
        position: 'top',

      })
     }


    cityName.focus();
    return true;
    }

    getClima(cityName:string,countryCode:string){
this.climaService.obtenerClima(cityName,countryCode).subscribe(res=>{
  console.log(res),this.clima=res},err=>{console.log(err)
  if(err.message!=""){
    Swal.fire({
      icon: 'warning',
      title: 'Algo salió mal',
      text: 'Verifique los datos ingresados ',
      position: 'top',

    })
  }
  })

    }

    seleccionarPais(){

    }

}

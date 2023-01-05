import {Component} from '@angular/core';

interface Pais {
  value: string;
  viewValue: string;
}


/**
 * @title Select in a form
 */
@Component({
  selector: 'app-selector-pais-component',
  templateUrl: 'selector-pais-component.component.html',
})
export class SelectorPaisComponentComponent {
  selectedValue: string="";
  selectedCar: string="";

  paisesAmericaSur: Pais[] = [

    {value: 'ar', viewValue: 'Argentina'},
    {value: 'bo', viewValue: 'Bolivia'},
    {value: 'br', viewValue: 'Brasil'},
    {value: 'cl', viewValue: 'Chile'},
    {value: 'co', viewValue: 'Colombia'},
    {value: 'ec', viewValue: 'Ecuador'},
    {value: 'gy', viewValue: 'Guayana Francesa'},
    {value: 'fk', viewValue: 'Islas Falkland (Malvinas)'},
    {value: 'py', viewValue: 'Paraguay '},
    {value: 'pe', viewValue: 'Perú'},
    {value: 'sr', viewValue: 'Surinam'},
    {value: 'uy', viewValue: 'Uruguay'},
    {value: 've', viewValue: 'Venezuela'},
  ];


}

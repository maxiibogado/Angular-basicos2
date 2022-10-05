import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html',
    styleUrls: ['contador.component.css']
  })
export class ContadorComponent {
 titulo: string = 'Contador apps';

  numeroInicial:number = 20;

  sumar ():void {
    this.numeroInicial += 1
  }

  restar ():void {
    this.numeroInicial -= 1
  }

  acumular (valor:number):void {
    this.numeroInicial += valor;
  }

  esDivisible(valor:number):boolean{
 
  return valor % 2 == 0 ? true : false;
 
}
}
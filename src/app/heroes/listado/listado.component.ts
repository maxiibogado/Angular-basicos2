import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroeBorrado: string = ''

  heroes: string [] = ['Spiderman','Hulk','Venom','Batman','Capitan America']

  borrarHeroe (){
     this.heroeBorrado = this.heroes.pop()||'No hay heroe para borrar';
     console.log("Borrando Heroe...");  
  }

   

}

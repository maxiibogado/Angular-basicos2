import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['heroe.component.css']
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number = 28;


    obtenerNombreYEdad():string{
       return this.nombre + " - " + this.edad.toString();          
    }

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    
     get obtenerEdad():number {
        return this.edad;
    }

    cambiarNombre():string{
        return this.nombre = 'Spiderman'
    }

    cambiarEdad():number {
        return this.edad = 20;
    }
    


    
}
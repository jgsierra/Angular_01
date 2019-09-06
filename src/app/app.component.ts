import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['Leo','nolbel','Seba','Gabi','Flor','Nico']
  /*activated : boolean = false;
  title = 'appAngular';*/


/* Metodo para el botton*/
 Avisar()
 {
   alert('Promise ' + this.name + ' || Nombre del modulo: '+  AppModule.name);
 }
  
 AddUser(newUser)
 {
   this.users.push(newUser.value);
   newUser.value ="";
   newUser.focus();

   return false;
 }


  name: string = "Gabriel";
  age : number;
  address :{
    street: string;
    city: string;
  };
  hobbies: string[]; //array

  constructor(){
    this.age = 35;
    this.address = {
        street : 'Lavalle 890',
        city: 'CABA'
    }
    this.hobbies = [
      'Boludear',
      'Dormir'
    ];
  }
}
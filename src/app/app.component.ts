import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['Leo','nolbel','Seba','Gabi','Flor','Nico']
  /*activated : boolean = false;
  title = 'appAngular';*/
  name: string = "Gabriel";
  age : number;
  address :{
    street: string;
    city: string;
  };
  hobbies: string[]; //array

  posts =  [];
  
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

 deleteUser(user)
 {
   for(let i = 0; i < this.users.length;i++)
   {
     if(user == this.users[i])
     {
       this.users.splice(i,1);
     }
   }
 }
  
  constructor(private dataService : DataService){
    this.age = 35;
    this.address = {
        street : 'Lavalle 890',
        city: 'CABA'
    }
    this.hobbies = [
      'Boludear',
      'Dormir'
    ];


    this.dataService.getData().subscribe(data =>{
      
      this.posts = data;
    });

  }
}
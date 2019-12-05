import { Component, OnInit,Input } from '@angular/core';
//import { AppModule } from '../app.module';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  //@Input() nameUser; /*es una entrada del componente*/ 
  
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


  
/* Metodo para el botton*/
 Avisar()
 {
   alert('Promise ' + this.name + ' || Nombre del modulo: CHINO KIN');
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
  
  
  
  constructor() { 

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

  ngOnInit() {
  }

}

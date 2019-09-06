import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' //cliente http para peticiones en angular

import { Posts }  from './Posts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { 


    console.log('Servcio http trabajando');
    
    }
    getData()
    {
      //retorno un arreglo del tipo Posts
      return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
    }
}

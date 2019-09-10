import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-datos-ws',
  templateUrl: './datos-ws.component.html',
  styleUrls: ['./datos-ws.component.css']
})
export class DatosWSComponent implements OnInit {
  posts =  [];
  constructor(private dataService : DataService) {

    this.dataService.getData().subscribe(data =>{
      
      this.posts = data;
    });
   }

  ngOnInit() {
  }
}

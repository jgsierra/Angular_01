import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  titulo = '0 descensos - xyz';
  constructor() { }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { UserComponent } from './user/user.component';

import { DataService } from './data.service';
@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,HttpClientModule
  ],
  providers: [ DataService ], //con esto le digo a la app de angular que voy a utilizar un servicio.
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route} from '@angular/router'

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { UserComponent } from './user/user.component';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';

const rutas : Route[]  = [  //arreglo de rutas para la app
  {path : '',component : AppComponent},
  {path : 'about', component : AboutComponent},
  {path : 'user', component : UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,HttpClientModule,RouterModule.forRoot(rutas)
  ],
  providers: [ DataService ], //con esto le digo a la app de angular que voy a utilizar un servicio.
  bootstrap: [AppComponent]
})
export class AppModule { }

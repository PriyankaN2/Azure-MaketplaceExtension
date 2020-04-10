import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsocketComponent } from './websocket/websocket.component';
import { LoginComponent } from './login/login.component';

//import {RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    WebsocketComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //RouterModule.forRoot(data)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

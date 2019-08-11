import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Import BrowserAnimationsModule
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
// Import your library
import { AlertModule } from 'ngx-alerts';
import { AppComponent } from './app.component';
import { NewempComponent } from './newemp/newemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';

@NgModule({
  declarations: [
    AppComponent,
    NewempComponent,
    ViewempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

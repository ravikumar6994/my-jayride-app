import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { UserformComponent } from './userform/userform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PassengerdetailsComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent } from './userform/userform.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/userform', pathMatch: 'full'},
  { path: 'userform', component: UserformComponent },
  { path: 'passengerdetails', component: PassengerdetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

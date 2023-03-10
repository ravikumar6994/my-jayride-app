import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getPassengerDetails() : Observable<any>{
    return this.http.get("https://jayridechallengeapi.azurewebsites.net/api/QuoteRequest");
  }

}

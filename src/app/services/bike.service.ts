import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

const httpsOptions = {
  headers: new HttpHeaders({'content-type':'application/json'})
}
  
@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes(){
    console.log("calling getbikes");
    return this.http.get("/server/api/v1/bikes");
  }

  getBike(id: number){
    return this.http.get("/server/api/v1/bikes/"+id);
  }

  getNextId(){
    return this.http.get("/server/api/v1/bikes/getnextid");
  }

  createBikeRegistration(bike){
   let body = JSON.stringify(bike);
    return this.http.post("/server/api/v1/bikes", body, httpsOptions);
  }
}

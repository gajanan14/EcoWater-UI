import { Component, OnInit } from '@angular/core';
import {BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public bikes;

  constructor(public bikeService: BikeService) { }

  ngOnInit() {
   this.getBikes();
  }

  getBikes(){
    this.bikeService.getBikes().subscribe(
      data => {this.bikes = data},
      err =>  console.error(err),
      () => console.log('Bike Uploaded')
    )
  }

}

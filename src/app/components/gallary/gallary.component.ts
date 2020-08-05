import { Component, OnInit } from '@angular/core';
import {BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
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

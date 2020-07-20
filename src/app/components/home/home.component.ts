import { Component, OnInit } from '@angular/core';
import {BikeService } from '../../services/bike.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[]= [
    'Globo MTB 29 full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade'
  ];

  bikeform : FormGroup;
  validMessage: string="";
  public nextId;

  constructor(public bikeService: BikeService) { }

  ngOnInit() {
    this.bikeform = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl(),
    });
    this.getNextId();
  }

  getNextId(){
    this.bikeService.getNextId().subscribe(
      data => { this.nextId = data},
      err =>  console.error(err),
      () => console.log('Got the number')
    )
  }
  submitRegistration(){
    if(this.bikeform.valid){
      this.validMessage = "Your bike registration has been submitted. ThankYou !";
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data =>{
          this.bikeform.reset();
          return true;
        },
        error =>{
          return Observable.throw(error);
        }
      )
    }
    else{
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}

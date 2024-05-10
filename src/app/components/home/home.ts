import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { Page } from '@nativescript/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls:['./home.css']
})
export class HomeComponent implements OnInit {
  public hoteles = [
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      nombre: 'Hospedaje 1',
      precio: 100500,
      rating: 5.0
    },
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      nombre: 'Hospedaje 2',
      precio: 200.000,
      rating: 4.2
    },
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      nombre: 'Hospedaje 3',
      precio: 300,
      rating: 3.5
    },
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      nombre: 'Hospedaje 3',
      precio: 300,
      rating: 3.5
    }
  ];
  public constructor(private router: Router,private page: Page, private homeService: HomeService) {
    // Use the component constructor to inject providers.
  }
  ngOnInit():void{
    this.page.actionBarHidden = true;
    //this.obtenerHoteles();
  }
  public onAccount(): void {
    this.router.navigate(['account']);
  }
  public onHotel(): void {
    this.router.navigate(['hotels']);
  }
  public onSearch(): void {
    this.router.navigate(['search']);
  }
  public onDetails(): void {
    this.router.navigate(['details']);
  }

  /*public obtenerHoteles(): void {
    this.homeService.getHoteles().subscribe((data) => {
      this.hoteles = data;
    });
  } */
}


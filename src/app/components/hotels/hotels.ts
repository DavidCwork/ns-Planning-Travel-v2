import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from '@nativescript/core';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.html',
  styleUrls: ['./hotels.css'],
})
export class HotelsComponent implements OnInit {

  public hotels = [
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      name: 'Hospedaje 1',
      price: 100500,
      rating: 5.0
    },
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      name: 'Hospedaje 2',
      price: 200.000,
      rating: 4.2
    },
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      name: 'Hospedaje 3',
      price: 300,
      rating: 3.5
    },
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      name: 'Hospedaje 3',
      price: 300,
      rating: 3.5
    }
  ]
  public constructor(private router: Router, private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  public onLogin(): void {
    this.router.navigate(['login']);
  }
}

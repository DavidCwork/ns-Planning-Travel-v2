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
  public hoteles = [];
  public constructor(private router: Router,private page: Page, private homeService: HomeService) {
    // Use the component constructor to inject providers.
  }
  ngOnInit():void{
    this.page.actionBarHidden = true;
    this.obtenerHoteles();
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

  public obtenerHoteles(): void {
    this.homeService.getHoteles().subscribe((data) => {
      this.hoteles = data;
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from '@nativescript/core';
import { HotelsService } from './service/hotels.service';
@Component({
  selector: 'hotels',
  templateUrl: './hotels.html',
  styleUrls: ['./hotels.css'],
})
export class HotelsComponent implements OnInit {

  public hotels = []
  fotos = []
  public constructor(private router: Router, private page: Page, private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getHoteles().subscribe(data => {
      this.hotels = data.hoteles
    })
    this.page.actionBarHidden = true;
  }

  public onHome(): void {
    this.router.navigate(['home']);
  }
  public onSearch(): void {
    this.router.navigate(['search']);
  }
  public onDetails(): void {
    this.router.navigate(['details']);
  }
}

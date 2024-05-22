import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from '@nativescript/core';
import { HotelsService } from './service/hotels.service'
import { forkJoin } from 'rxjs';
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
    forkJoin({
      hotels: this.hotelsService.getHoteles(),
      fotos: this.hotelsService.getFoto()
    }).subscribe(({ hotels, fotos }) => {
      this.hotels = hotels.map(hotel => {
        
        return hotel;
      });
      this.fotos = fotos;
      this.fotos.forEach(foto => {
        const hotel = {}
        this.hotelsService.getHotelById(foto.id_hotel).subscribe(h => {
          h = hotel
          const fotoHotel = this.hotels.find(h => h.id === hotel.id);
          if(fotoHotel) {
            fotoHotel.img = foto.url_foto;
          }
          console.log(fotoHotel);
        });
      });
    });
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

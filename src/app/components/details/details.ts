import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from "@angular/router";
import { Page } from '@nativescript/core';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from '~/app/service/api.service';


@Component({
  selector: 'details',
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  private sub: any;
  unsuscribe$: Subject<void> = new Subject<void>();
  hotel = {};
  habitaciones = []

  public constructor(private router: Router, private page: Page, private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void{
    this.page.actionBarHidden = true;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.obtenerDetalles();
  }
  public onHotel(): void {
    this.router.navigate(['hotels']);
  }
  public onReserve(): void {
    this.router.navigate(['reserve', this.id]);
  }

  obtenerDetalles() {
    this.apiService.getDataById('detallehotel', this.id).pipe(takeUntil(this.unsuscribe$)).subscribe((data) => {
      console.log(data);
      this.hotel = data.hotel;
      this.habitaciones = data.habitaciones
    })
  }

  onDestroy() {
    this.sub.unsuscribe();
  }
}

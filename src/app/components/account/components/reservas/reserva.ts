import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '@nativescript/core';
import { ApiService } from '../../../../service/api.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'reserva',
  templateUrl: './reserva.html',
  styleUrls: ['./reserva.css']
})

export class ReservaComponent implements OnInit {
  usuario = {};
  id_usuario = 0;
  reservas = [];
  noHayReserva: boolean = true;
  unsuscribe$: Subject<void> = new Subject<void>();

  constructor(private page: Page, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.revisarSesion();
  }

  public onHome(): void {
    this.router.navigate(['home']);
  }

  revisarSesion() {
    if(localStorage.getItem('planning.token')) {
      const user = JSON.parse(localStorage.getItem('planning.user'))
      console.log(user);
      this.id_usuario = user.user_id;
      this.usuario = user;
      this.obtenerReservasUsuario();
    }
  }

  obtenerReservasUsuario() {
    this.apiService.getDataById('ver_reserva_usuario', this.id_usuario).pipe(takeUntil(this.unsuscribe$)).subscribe((data) => {
      this.reservas = data.reservas;
      console.log(data.reservas);
      if(data.reservas) {
        this.noHayReserva = false;
      }
    });
  }

  public onHotel(): void {
    this.router.navigate(['hotels']);
  }

  public onSearch(): void {
    this.router.navigate(['search']);
  }

  public onAccount(): void {
    this.router.navigate(['account']);
  }

  ngDestroy() {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }
}

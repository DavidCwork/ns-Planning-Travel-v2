import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page, Dialogs } from '@nativescript/core';
import { ApiService } from './api.service';
import { ItemEventData } from "@nativescript/core/ui/list-view";

@Component({
  selector: 'account',
  templateUrl: './account.html',
  styleUrls: ['./account.css'],
})
export class AccountComponent implements OnInit {

	usuario: any[];

	public constructor(private router: Router,private page: Page, private apiService: ApiService) {}

	ngOnInit(): void {
		this.page.actionBarHidden = true;
		this.obtenerTodos();
	}

  public onEditAccount(): void {
      this.router.navigate(['edit-account']);
  }

  public onHome(): void {
      this.router.navigate(['home']);
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

	public obtenerTodos(){
    const user = JSON.parse(localStorage.getItem('planning.user'));
    this.usuario = user;
  }

	public onItemTap(args: ItemEventData) {
    let register = this.usuario[args.index]
    //console.log(`Index: ${args.index}; Item: ${register.id}`);
    //console.log(`ID: ${register.id} - NOMBRE: ${register.nombre_cat} - DESCRCIPCIÓN: ${register.desc} `)

    //Consultar por ID en la API
    this.apiService.getRegisterById(register.id).subscribe((res) => {
        Dialogs.alert({
            title: 'Detalles!',
            message: `ID: ${res.id}\nNOMBRE: ${res.nombre}\nCORREO: ${res.correo} \n Contraseña: ${res.contrasena}\n Rol: ${res.rol}\n UrlFoto: ${res.foto}`,
            okButtonText: 'OK',
            cancelable: true,
        });
        console.info(res)
    });
  }

  onReservas() {
    this.router.navigate(['reserva'])
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}

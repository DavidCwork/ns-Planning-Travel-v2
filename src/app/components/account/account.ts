import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from '@nativescript/core';
import { ApiService } from './api.service';
import { Dialogs } from '@nativescript/core'
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
	tapNavigate() {
	
        
	}
	public obtenerTodos(){
        this.apiService.getRegisters().subscribe((data: any[]) => {
            this.usuario = data;
        });
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

    public eliminarCat(item){
        Dialogs.confirm({
            title: 'Confirmación',
            message: `Está seguro de eliminar este registro ? ${item.nombre}`,
            okButtonText: 'SI',
            cancelButtonText: 'No',
            neutralButtonText: 'Cancelar',
            })
            .then((result) => {
                console.log(result);
                if (result){
                    this.apiService.deleteRegister(item.id).subscribe((res: string) => {
                        Dialogs.alert({
                            title: 'Respuesta:',
                            message: "Categoría eliminada correctamente!!",
                            okButtonText: 'OK',
                            cancelable: true,
                        });
                        this.obtenerTodos();
                    },error => {
                        console.log(error.status)
                        if (error.status == 400){
                            Dialogs.alert({
                                title: 'Respuesta:',
                                message: error.error.message,
                                okButtonText: 'OK',
                                cancelable: true,
                            });
                        }
                        else{
                            Dialogs.alert({
                                title: 'Respuesta:',
                                message: error.message,
                                okButtonText: 'OK',
                                cancelable: true,
                            });
                        }

                    });
                }
            });
			
	}
	public editarCat(item){
        console.log(`Editar cat: ${item.id}`)
    
        //this.router.navigate(['categorias-editar'], { queryParams: { id: item.id } });
    }

}
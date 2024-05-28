import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Dialogs, ListPicker, Page, TextField } from '@nativescript/core';
import { PropertyChangeData } from '@nativescript/core/data/observable';
import { DatePicker } from '@nativescript/core/ui/date-picker';
import { Subject, takeUntil } from 'rxjs';
import { ReserveService } from './reserve.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'reserve',
  templateUrl: './reserve.html',
  styleUrls: ['./reserve.css'],
})
export class ReserveComponent implements OnInit {
  idHotel: number;
  private sub$: Subject<void> = new Subject<void>();
  selectedIndex: number = 0;
  habitacionesDisponibles = [];

  selectedDate: Date;
  minDate_init: Date;
  maxDate_init: Date;

  selectedDate_end: Date;
  minDate_end: Date;
  maxDate_end: Date;

  numHuespedes: number;

  days = new Date();
  user = [];

  constructor(private router: Router, private page: Page, private route: ActivatedRoute, private reserveService: ReserveService) {}

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.route.params.pipe(takeUntil(this.sub$)).subscribe(params => {
      this.idHotel = +params['id'];
    });
    this.obtenerSession();
    // Fecha inicio
    this.selectedDate = new Date();
    this.minDate_init = new Date();
    this.maxDate_init = new Date(2030, 11, 31);

    // Fecha fin
    this.days.setDate(this.days.getDate() + 1);
    this.selectedDate_end = new Date();
    this.minDate_end = this.days;
    this.maxDate_end = new Date(2030, 11, 31);
  }

  // captura fecha inicio
  onInitDateChange(args: PropertyChangeData) {
    const picker = args.object as DatePicker;
    this.selectedDate = new Date(args.value);
    this.days.setDate(this.selectedDate.getDate() + 1);
  }

  // captura fecha final
  onEndDateChange(args: PropertyChangeData) {
    const picker = args.object as DatePicker;
    this.selectedDate_end = new Date(args.value);
  }

  public onDetails(): void {
    this.router.navigate(['details']);
  }

  tapNavigate() {
  }

  verificarHabitacionesDisponibles() {
    const fechaLlegada = this.obtenerFechaFormateada(this.selectedDate);
    const fechaSalida = this.obtenerFechaFormateada(this.selectedDate_end);
    this.reserveService.obtenerDisponibilidad(fechaLlegada, fechaSalida).subscribe(data => {
      console.log(data);
      this.habitacionesDisponibles = data.habitaciones_disponibles;
    })
  }

  hacerReserva() {
    const indiceAleatorio = Math.floor(Math.random() * this.habitacionesDisponibles.length);
    const idUsuario = this.user.user_id;
    const habitacion = this.habitacionesDisponibles[indiceAleatorio];
    const fechaLlegada = this.obtenerFechaFormateada(this.selectedDate);
    const fechaSalida = this.obtenerFechaFormateada(this.selectedDate_end);
    const numHuespedes = this.numHuespedes;
    const data = {
      idUsuario,
      habitacion,
      fechaLlegada,
      fechaSalida,
      numHuespedes
    };
    this.reserveService.hacerReserva(data).subscribe((res) => {
      console.log(res);
      if(res) {
        Dialogs.alert({
          title: 'info',
          message: 'Reserva hecha correctamente',
          okButtonText: 'OK',
          cancelable: true
        })
        this.router.navigate(['hotels']);
      }
    })
  }

  obtenerFechaFormateada(fecha) {
    const fechaNueva = new Date(fecha);

    // Obtener el año, mes y día de la fecha
    const año = fechaNueva.getFullYear();
    const mes = ('0' + (fechaNueva.getMonth() + 1)).slice(-2); // +1 porque los meses comienzan desde 0
    const dia = ('0' + fechaNueva.getDate()).slice(-2);

    // Formatear la fecha en el formato deseado
    const fechaFormateada = `${año}-${mes}-${dia}`;

    return fechaFormateada;
  }

  inputChange(args) {
    let textField = <UITextField>args.object;
    this.numHuespedes = +textField.text;
  }

  obtenerSession() {
    this.user = JSON.parse(localStorage.getItem('planning.user'));
  }

  onDestroy() {
    this.sub$.next();
    this.sub$.complete();
  }
}

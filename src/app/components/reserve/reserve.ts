import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from '@nativescript/core';
import { Dialogs } from '@nativescript/core';
import { PropertyChangeData } from '@nativescript/core/data/observable';
import { DatePicker } from '@nativescript/core/ui/date-picker';

@Component({
  selector: 'reserve',
  templateUrl: './reserve.html',
  styleUrls: ['./reserve.css'],
})
export class ReserveComponent implements OnInit {
  items: Array<number> = [123];
  selectedIndex: number = 0;

  selectedDate: Date;
  minDate_init: Date;
  maxDate_init: Date;

  selectedDate_end: Date;
  minDate_end: Date;
  maxDate_end: Date;

  days = new Date();

  constructor(private router: Router, private page: Page) {}
  
  ngOnInit(): void {
    this.page.actionBarHidden = true;
   
    // Fecha inicio
    this.selectedDate = new Date();
    this.minDate_init = new Date(); 
    this.maxDate_init = new Date(2030, 11, 31); 

    // Fecha fin
    this.days.setDate(this.days.getDate() + 2);
    this.selectedDate_end = new Date();
    this.minDate_end = this.days; 
    this.maxDate_end = new Date(2030, 11, 31); 
  }

  // captura fecha inicio
  onInitDateChange(args: PropertyChangeData) {
    const picker = args.object as DatePicker;
    this.selectedDate = new Date(args.value);
    this.days.setDate(this.selectedDate.getDate() + 2);
  }

  // captura fechafinal 
  onEndDateChange(args: PropertyChangeData) {
    const picker = args.object as DatePicker;
    this.selectedDate_end = new Date(args.value);
  }

  public onDetails(): void {
    this.router.navigate(['details']);
  }

  tapNavigate() {
  }
}

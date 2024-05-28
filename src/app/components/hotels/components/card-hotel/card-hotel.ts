import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-hotel',
  templateUrl: './card-hotel.html',
  styleUrls: ['./card-hotel.css']
})

export class CardHotelComponent implements OnInit {
  @Input() hotelImg: string;
  @Input() hotelName: string;
  @Input() hotelPrice: number;
  @Input() hotelRating: number;
  @Output() tapEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() {}

  onTap() {
    this.tapEvent.emit();
  }
}

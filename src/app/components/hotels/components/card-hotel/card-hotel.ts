import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() { }
}

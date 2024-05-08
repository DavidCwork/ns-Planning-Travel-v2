import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { Page } from '@nativescript/core';


@Component({
  selector: 'details',
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class DetailsComponent implements OnInit {
  public constructor(private router: Router, private page: Page) { }
  ngOnInit(): void{
    this.page.actionBarHidden = true;
  }
  public onHotel(): void {
    this.router.navigate(['hotels']);
  }
}

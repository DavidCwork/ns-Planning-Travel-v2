import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { Page } from '@nativescript/core';


@Component({
  selector: 'search',
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent {
  public constructor(private router: Router, private page: Page) { }
 ngOnInit(): void{
  this.page.actionBarHidden = true;
 }
 public onHome(): void {
  this.router.navigate(['home']);
}
}

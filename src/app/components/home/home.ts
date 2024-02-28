import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { Page } from '@nativescript/core'

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls:['./home.css']
})
export class HomeComponent implements OnInit {
  public constructor(private router: Router,private page: Page) {
    // Use the component constructor to inject providers.
  }
  ngOnInit():void{
    this.page.actionBarHidden = true;
  }
}

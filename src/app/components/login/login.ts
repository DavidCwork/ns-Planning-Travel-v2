import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { Page, TextField } from '@nativescript/core';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent implements OnInit {
  passwordVisible: boolean = false;
  passwordField: TextField;
  public constructor(private router: Router, private page: Page) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
	this.page.actionBarHidden = true;
  }

  public onTap(): void{
    this.router.navigate(["home"]);
  }

  public onRegister(): void{
    this.router.navigate(["register"]);
  }

  public togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    this.passwordField.secure = !this.passwordVisible;
  }

  public textFieldLoaded(args){
    this.passwordField = args.object;
  }

  public onHotels(): void {
    this.router.navigate(['hotels']);
  }
}

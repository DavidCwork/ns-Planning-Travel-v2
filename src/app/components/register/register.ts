import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page, TextField } from '@nativescript/core';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})

export class RegisterComponent implements OnInit {
  showPasswordIcon: boolean = true;
  showConfirmPasswordIcon: boolean = true;
  passwordField: TextField;
  confirmPasswordField: TextField;

  public constructor(private router: Router, private page: Page) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  public onLogin(): void{
    this.router.navigate(["login"]);
  }

  public togglePasswordVisibility(field: string): void {
    if (field === 'password') {
        this.showPasswordIcon = !this.showPasswordIcon;
        this.passwordField.secure = !this.passwordField.secure;
    } else if (field === 'confirmPassword') {
        this.showConfirmPasswordIcon = !this.showConfirmPasswordIcon;
        this.confirmPasswordField.secure = !this.confirmPasswordField.secure;
    }
}

textFieldLoaded(args, field: string): void {
    if (field === 'password') {
        this.passwordField = args.object;
    } else if (field === 'confirmPassword') {
        this.confirmPasswordField = args.object;
    }
}
}

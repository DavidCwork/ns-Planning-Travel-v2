import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { Dialogs, Page, TextField } from '@nativescript/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent implements OnInit {
  nick: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  passwordField: TextField;

  public constructor(private router: Router, private page: Page, private loginService: LoginService) {

  }

  ngOnInit(): void {
	  this.page.actionBarHidden = true;
    if(localStorage.getItem('planning.token')) {
      this.router.navigate(['home']);
    }
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

  inputChange(args, campo) {
    let textField = <UITextField>args.object;
    if(campo === 'nick') {
      this.nick = textField.text;
    } else if (campo === 'password') {
      this.password = textField.text;
    }
  }

  public onHotels(): void {
    this.router.navigate(['hotels']);
  }

  loguear() {
    let data = {
      username: this.nick,
      password: this.password
    };

    this.loginService.login(data).subscribe((res) => {
      if(res && res.token.length > 0) {
        localStorage.setItem('planning.token', res.token);
        localStorage.setItem('planning.user', JSON.stringify(res.user));

        Dialogs.alert({
          title: 'Info!',
          message: 'Bienvenido!!',
          okButtonText: 'OK',
          cancelable: true
        });
        this.router.navigate(['home']);
      }
    }, error => {
      if(error.status === 400) {
        Dialogs.alert({
          title: 'Alerta',
          message: 'Usuario o contraseña incorrectos',
          okButtonText: 'OK',
          cancelable: true
        });
      } else {
        Dialogs.alert({
          title: 'Respuesta',
          message: error.error.message,
          okButtonText: 'OK',
          cancelable: true
        });
      }
    });
  }
}

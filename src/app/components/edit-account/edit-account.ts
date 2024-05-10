import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '@nativescript/core';

@Component({
  selector: 'edit-account',
  templateUrl: './edit-account.html',
  styleUrls: ['./edit-account.css'],
})
export class EditAccountComponent implements OnInit {

	public constructor(private page: Page, private router: Router) {}

	ngOnInit(): void {
		this.page.actionBarHidden = true;
	}
	public onAccount(): void {
		this.router.navigate(['account'])
	}
	public onHome(): void {
		this.router.navigate(['home'])
	}
}

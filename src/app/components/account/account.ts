import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from '@nativescript/core';

@Component({
  selector: 'account',
  templateUrl: './account.html',
  styleUrls: ['./account.css'],
})
export class AccountComponent implements OnInit {

	public constructor(private page: Page) {}

	ngOnInit(): void {
		this.page.actionBarHidden = true;
	}
}
import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'edit-account',
  templateUrl: './edit-account.html',
  styleUrls: ['./edit-account.css'],
})
export class EditAccountComponent implements OnInit {

	public constructor(private page: Page) {}

	ngOnInit(): void {
		this.page.actionBarHidden = true;
	}
}
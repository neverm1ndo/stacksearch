import { Component, OnInit } from '@angular/core';
import { OauthService } from '../oauth.service';
import { NgForm } from '@angular/forms';
import { rollLeft, rollRight } from '../app.animations';

export interface UnsinedUser {
    email: string,
    password: string
}


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  animations: [rollLeft, rollRight]
})
export class AuthComponent implements OnInit {

  constructor(
    private oauth: OauthService
  ) { }

  logInTab: boolean = true;

  info() {
    this.oauth.getAppInfo().subscribe(console.log);
  }

  ngOnInit() {}

}

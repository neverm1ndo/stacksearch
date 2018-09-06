import { Component, OnInit } from '@angular/core';
import { OauthService } from '../oauth.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less']
})
export class HeadComponent implements OnInit {

  constructor(
    private auth: OauthService
  ) { }

  user: string;

  ngOnInit() {
    this.user = this.auth.getUserInfo().username;
  }

}

import { Component, OnInit } from '@angular/core';
import { OauthService } from '../oauth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { alert } from '../app.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [alert]
})
export class LoginComponent implements OnInit {
  loading = false;
  error: string;

  constructor(
    private auth: OauthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  login(user: NgForm) {
       this.loading = true;
       this.auth.login(user.value.email, user.value.password)
           .subscribe(
               data => {
                   this.router.navigate(['/search']);
               },
               error => {
                   this.loading = false;
                   this.error = error.error;
               });
   }

  ngOnInit() {
    this.auth.logout();
  }

}

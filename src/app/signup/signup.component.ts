import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { alert, rollLeft} from '../app.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less'],
  animations: [alert, rollLeft]
})
export class SignupComponent implements OnInit {
  loading = false;
  error: string;
  success: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  register(user : NgForm) {
        this.loading = true;
        this.userService.create(user.value)
            .subscribe(
                data => {
                    this.success = 'Registration successful!';
                },
                error => {
                    this.loading = false;
                    this.error = error.error;
                });
    }

  ngOnInit() {
  }

}

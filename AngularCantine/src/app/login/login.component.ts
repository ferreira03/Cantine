import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }
  loginUser(log) {
    this.authService.loginUser(log.form.value)
      .subscribe(res => {
        console.log("loggin" + res);
        localStorage.setItem('token', res.token)
        log.form.reset();
      },
        err => { console.log(err) })
  }
}

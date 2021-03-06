import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  connected;
  user;

  constructor(private jwtAuth: AuthService) {

  }

  ngOnInit() {
    this.connected = this.jwtAuth.loggedIn();
    if (this.connected) {
      this.user = this.jwtAuth.getUserData();
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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

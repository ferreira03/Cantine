import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id;
  user;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userService.getOneUser(this.id)
      .subscribe(data => this.user = data)
  }


}

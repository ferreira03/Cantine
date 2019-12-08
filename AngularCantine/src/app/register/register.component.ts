import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  registerUser(form) {
    this.authService.registerUser(form.form.value)
      .subscribe(res => {
        console.log("c est ajouté" + res);
        localStorage.setItem('token', res.token)
        form.reset();
      },
        err => { console.log(err) })
  }
  /*   addUser(user) {
      this.authService.addUser(user.form.value)
  
    } */
}


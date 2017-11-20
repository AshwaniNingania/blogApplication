import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private users;
  constructor(private _route: Router, private loginservice: LoginService) { }
  login(username: string, password: string) {
      this._route.navigate(['/home/' + username + '/' + password]);
  }

  signup(username: string, password: string, confirm: string) {
    if (username.trim() === '' || password.trim() === '') {
      alert('Invalid User.');
    } else
    if (password === confirm) {
    this.loginservice.getData().subscribe((data) => {
        this.users = data;
      for (let i = 0; i < this.users.length; i++) {
        if (username === this.users[i].username) {
          alert('User already exist');
          return false;
        }
      }
      this.loginservice.postData({
        'username': username.toString(),
        'password': password.toString(),
        'favourites': []
      }).subscribe();
      alert('User created.');
    });
    } else {
      alert('Invalid Password.');
    }
    document.location.reload();
  }

  ngOnInit() {
  }

}

import {Injectable, OnInit} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {LoginService} from './login.service';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class BlogsGuardService {

  allUsers;
  user: object;
  username: string;
  password: string;
  flag: boolean;
  constructor(private _router: Router, private loginService: LoginService) { }

  getUser() {
    return this.user;
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.username = route.url[1].path;
    this.password = route.url[2].path;
      this.loginService.getData()
        .subscribe((data) => {
          this.allUsers = data;
        for (const user in this.allUsers) {
          if (this.allUsers[user].username === this.username && this.allUsers[user].password === this.password) {
            this.flag = true;
            this.user = this.allUsers[user];
          }
        }
        if (!this.flag) {
          alert('Invalid Username or Password.');
          this._router.navigate(['/login']);
        }
        });
        return true;
    }
}

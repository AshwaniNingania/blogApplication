import { Component, OnInit } from '@angular/core';
import {BlogsService} from './blogs.service';
import {BlogsGuardService} from '../blogs-guard.service';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allBlogs: Object [];
  updatedData: Object = {
    id: '',
  title: '',
  category: '',
  createdDate: '',
  description: ''
  };
  constructor(private request: BlogsService, private _user: BlogsGuardService, private _login: LoginService) {  }

  ngOnInit() {
    this.refreshIcons();
  }

  refreshIcons() {
    this.request.getData()
      .subscribe((data) => {
        this.allBlogs = data;
      });
  }

  addBlog(event) {
    console.log('Reached here');
    const data = {
      id: event.id,
      title: event.title,
      category: event.category,
      createdDate: event.createdDate,
      description: event.description,
      author: event.author
    };
    this.updatedData = {
      id: '',
        title: '',
      category: '',
      createdDate: '',
      description: ''
    };
    this.request.checkData(data).subscribe((data1) => {
      this.refreshIcons();
    });
  }

  getUser() {
      return this._user.getUser();
  }

  editUser(user) {
    this._login.updateData(user).subscribe();
  }

  updateblog(data: object) {
    this.updatedData = data;
  }

  deleteBlog(id: string) {
    this.request.deleteData(id).subscribe(data => {
      this.refreshIcons();
    });
  }

}

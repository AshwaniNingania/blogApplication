import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBlog} from '../blogs.interface';

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.css']
})
export class BlogsDetailsComponent implements OnInit {
  @Input() blogs;
  @Input() user;
  @Input() filteredBlogs;
  @Output() deleteIdClicked: EventEmitter<string> = new EventEmitter();
  @Output() updatedBlog: EventEmitter<object> = new EventEmitter();
  @Output() userEmit: EventEmitter<object> = new EventEmitter();
  private _titleFilter;
  favBlog = false;
  private _categoryFilter: string;
  private index: number;

  filterFavBlogs() {
    this.favBlog = !this.favBlog;
   }

  addFav(id: number) {
    if (this.checkFav(id)) {
      this.index = this.user.favourites.indexOf(id);
      this.user.favourites.splice(this.index, 1);
    } else {
      this.user.favourites.push(id);
    }
    this.userEmit.emit(this.user);
  }

  get titleFilter(): string {
    return this._titleFilter;
  }

  set titleFilter(value: string) {
    this._titleFilter = value;
    this._categoryFilter = '';
    this.filteredBlogs = this.titleFilter ? this.performFilter(this.titleFilter) : this.blogs;
  }

  performFilter(filterby: string): IBlog[] {
    filterby = filterby.toLocaleLowerCase();
    return this.blogs.filter((blog: IBlog) =>
      blog.title.toLocaleLowerCase().indexOf(filterby) !== -1);
  }

  get categoryFilter(): string {
    return this._categoryFilter;
  }

  set categoryFilter(value: string) {
    this._categoryFilter = value;
     this._titleFilter = '';
    this.filteredBlogs = this.categoryFilter ? this.performFilterCategory(this.categoryFilter) : this.blogs;
  }

  performFilterCategory(filterby: string): IBlog[] {
    filterby = filterby.toLocaleLowerCase();
    return this.blogs.filter((blog: IBlog) =>
      blog.category.toLocaleLowerCase().indexOf(filterby) !== -1);
  }

  checkFav(id: number) {
    for (let i = 0; i < this.user.favourites.length; i++) {
      if (this.user.favourites[i] === id) {
        return true;
      }
    }
    return false;
  }

  updateBlog(blog) {
    this.updatedBlog.emit(blog);
  }
  deleteBlog(id: string) {
    this.deleteIdClicked.emit(id.toString());
  }

  constructor() { }

  ngOnInit() {
    this.filteredBlogs = this.blogs;
  }

}

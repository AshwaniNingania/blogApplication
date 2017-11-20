import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BlogsGuardService} from '../../blogs-guard.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  @Input() data;
  @Output() newObject: EventEmitter<object> = new EventEmitter<object>();
  @Input() user;
  constructor(private guard: BlogsGuardService) { }

  newBlog(title: string, category: string, description: string) {
    if (title.trim() === '') {
      alert('Enter the title.');
    } else if (description.trim() === '') {
      alert('Enter the description...');
    } else if (category.trim() === '') {
      alert('Please select a category.');
    } else {
      this.newObject.emit({
        id: this.data.id,
        title: title,
        category: category,
        createdDate: (new Date).toString(),
        description: description,
        author: this.user.username
      });
    }
  }

  ngOnInit() {
  }

}

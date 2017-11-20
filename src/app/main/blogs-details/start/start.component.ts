import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  /*@Output() ratingClicked: EventEmitter<string> = new EventEmitter();*/
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }
  onclick(): void {
    console.log('The ' + this.rating + ' is clicked.');
    /*this.ratingClicked.emit(this.rating + ' is clicked.');*/
  }
}

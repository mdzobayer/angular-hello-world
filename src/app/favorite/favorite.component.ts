import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
  @Input() title: string;
  @Input() obj: any;

  @Output('click') change = new EventEmitter();     // Add output alias

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.change.emit({message: "A message from Child"});
  }
  ParentToChild() {
    console.log(this.obj);
  }

}

export interface FavoriteChangeEventArg {
  change:string;
}
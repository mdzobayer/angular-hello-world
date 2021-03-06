import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
  @Input('T-tle') title: string;                    // Add input alias
  @Input() obj: Person;

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

export interface Person {
  name:string;
  age:number;
  dob:string;
}
import { FavoriteChangeEventArg } from './favorite/favorite.component';
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  courses:number [] = [1, 2];

  post = {
    title: "Hello world",
    isFavorite: true
  }

  person = {
    name: "Koushik Ghosh",
    age: 15,
    dob: "01-01-1997"
  }
  childToParent(aParam:FavoriteChangeEventArg) {
    console.log("Child to Parent: ", aParam);
  }
}

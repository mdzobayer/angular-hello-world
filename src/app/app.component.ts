import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'hello-world';
  post = {
    title: "Hello world",
    isFavorite: true
  }

  person = {
    name: "Zobayer",
    age: 15,
    dob: "01-01-1997"
  }
  childToParent(aParam) {
    console.log("Child to Parent: ", aParam);
  }
}

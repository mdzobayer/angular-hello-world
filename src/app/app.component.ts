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

  viewMode = 'someThingElse';

  Courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ];

  onAdd() {
    this.Courses.push({id: this.Courses.length, name: 'course'});
  }

  onRemove(Course) {
    let index = this.Courses.indexOf(Course);
    this.Courses.splice(index, 1);
  }

  WebCourses;
  loadCourses() {
    this.WebCourses =  [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
    ];
  }
  trackCourse(index, course) {
    return course ? course.id : undefined;    // Track object by courseid insted of object identity
  }

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

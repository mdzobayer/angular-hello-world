import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/posts').subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}

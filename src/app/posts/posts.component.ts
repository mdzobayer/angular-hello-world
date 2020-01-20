import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url).subscribe(response => {
      //console.log(response.json());
      this.posts = response.json();
    });
  }

  ngOnInit() {
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value}
    input.value = '';
    this.http.post(this.url, JSON.stringify(post)).subscribe(response =>{
      post['id'] = response.json().id;
//      this.posts.push(post);    // Add end of the list;
      this.posts.splice(0, 0, post);  // Add begin of the list
      console.log(response.json());
    });
  }

}

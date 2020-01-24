import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];

  constructor(private service:PostService) {
   
  }

  ngOnInit() {
    this.service.getPost().subscribe(response => {
      //console.log(response.json());
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value}
    input.value = '';
    this.service.createPost(post).subscribe(response =>{
      post['id'] = response.json().id;
//      this.posts.push(post);    // Add end of the list;
      this.posts.splice(0, 0, post);  // Add begin of the list
      console.log(response.json());
    });
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(response =>{
      console.log(response.json());
    });
//    this.http.patch(this.url, JSON.stringify({ isRead: true}));
  }

  deletePost(post) {
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}

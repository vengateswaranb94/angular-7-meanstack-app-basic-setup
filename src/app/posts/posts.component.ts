import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  // providers: [PostsService]
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(
    private postSevice: PostsService
  ) {

  }

  ngOnInit() {
    this.postSevice.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}

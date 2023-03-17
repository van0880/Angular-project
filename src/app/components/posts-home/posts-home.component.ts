import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/models/allPosts';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.css']
})
export class PostsHomeComponent {
  @Input('post') posts: Posts [] = [] 
}

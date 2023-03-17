import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/models/allPosts';

@Component({
  selector: 'app-blog-post-posts',
  templateUrl: './blog-post-posts.component.html',
  styleUrls: ['./blog-post-posts.component.css']
})
export class BlogPostPostsComponent {
  @Input() block: Posts [] = [] 

}

import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/models/allPosts';

@Component({
  selector: 'app-all-posts-blog',
  templateUrl: './all-posts-blog.component.html',
  styleUrls: ['./all-posts-blog.component.css']
})
export class AllPostsBlogComponent {
  @Input() block: Posts [] = [] 

}

import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/models/allPosts';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
  @Input() block: Posts [] = [] 
}

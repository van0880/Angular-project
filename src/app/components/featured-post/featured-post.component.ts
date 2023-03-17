import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/models/allPosts';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent {
  @Input('post') data: Posts[] = []
}

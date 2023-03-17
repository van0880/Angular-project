import { Component } from '@angular/core';
import { Posts } from 'src/app/models/allPosts';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  allPosts: Posts[] = []
 



  constructor(private request: RequestService){}

  ngOnInit(){
    this.getPosts()
  }
  getPosts(){
    this.request.getData<Posts[]>(environment.posts.get+ "?_start=14&_end=16").subscribe((item)=>{
      this.allPosts = item
    })
  }

  
}

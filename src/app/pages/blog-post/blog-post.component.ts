import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Posts } from 'src/app/models/allPosts';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})

export class BlogPostComponent {
  allPosts: Posts[] = []
  mainPost: Posts = {
    id: 0,
    img: "",
    category: "",
    name: "",
    date: "",
    title: "",
    text: ""
  }
  id: number | string = 0 
  constructor(private request: RequestService, public activeRoute: ActivatedRoute, public router: Router){}

  ngOnInit(){
    this.getPosts()
    this.activeRoute.params.subscribe(param =>{
      this.id = param['id']
      this.getMainPost()
    })
  }
  getMainPost(): void{
    this.request.getData<Posts>(environment.posts.get+ `/${this.id}`).subscribe((item)=>{
      this.mainPost = item
    },  () =>{
      this.router.navigate(['error'])
    })
  }
  getPosts(){
    this.request.getData<Posts[]>(environment.posts.get+ "?_start=5&_end=8").subscribe((item)=>{
      this.allPosts = item
    })
  }
}

import { Component } from '@angular/core';
import {Category} from '../../models/categorysBlock'
import { Posts } from 'src/app/models/allPosts';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  categoryBlock: Category[] = [];
  allPosts: Posts[] = []
  feauterPost: Posts[] = []
  count: number = 1
  pages: number = 0
  disable: boolean = true
  constructor(private request: RequestService){}

  ngOnInit(){
    this.getFeauterPost()
    this.getPosts()
    this.getCategorys()
    this.request.getData<Posts[]>(environment.posts.get).subscribe((item)=>{   
      this.pages = Math.ceil(item.length / 5)
    })
  }

  getCategorys(){
    this.request.getData<Category[]>(environment.categorys.get).subscribe((item)=>{
      this.categoryBlock = item
    
    })
  }

  getPosts(){
    this.request.getData<Posts[]>(environment.posts.get+ `?_page=${this.count}&_limit=5`).subscribe((item)=>{
      this.allPosts = item
      
    })
  }
  getFeauterPost(){
    this.request.getData<Posts[]>(environment.posts.get+ "?_start=17&_end=18").subscribe((item)=>{
      this.feauterPost = item
    })
  }
  nextPage(){
    if(this.count < this.pages){
      this.count++
      this.getPosts()
      if(this.count == this.pages){

      }

    }
    
  }
  prevPage(){
    if(this.count>1){
      this.count--
      this.getPosts()
    }
    
  }

}
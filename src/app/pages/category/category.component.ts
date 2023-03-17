import { Component } from '@angular/core';
import { Posts } from 'src/app/models/allPosts';
import { Category } from 'src/app/models/categorysBlock';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  allPosts: Posts[] = []
  categoryBlock: Category[] = [];


  constructor(private request: RequestService){}

  ngOnInit(){
    this.getPosts()
    this.getCategorys()

  }
  getPosts(){
    this.request.getData<Posts[]>(environment.posts.get+ "?_start=8&_end=12").subscribe((item)=>{
      this.allPosts = item
    })
  }

  getCategorys(){
    this.request.getData<Category[]>(environment.categorys.get).subscribe((item)=>{
      this.categoryBlock = item
    })
  }
}

import { Component } from '@angular/core';
import { Posts } from 'src/app/models/allPosts';
import { Authors } from 'src/app/models/authorsList';
import { Category } from 'src/app/models/categorysBlock';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public request: RequestService){}
  authors: number = 0;
  categories: number = 0;
  posts: number = 0

  ngOnInit():void{
    this.getInfo()
  }
  getInfo() :void{
    this.request.getData<Authors []>(environment.authorList.get).subscribe((authors)=>{
      this.authors = authors.length 
      console.log(this.authors)
    })
    this.request.getData<Category []>(environment.categorys.get).subscribe((element)=>{
      this.categories = element.length 
    })
    this.request.getData<Posts []>(environment.posts.get).subscribe((posts)=>{
      this.posts = posts.length
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {Category} from '../../models/categorysBlock'
import { Authors, socPages} from '../../models/authorsList'
import { OurMission } from 'src/app/models/ourMission';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';
import { Posts } from 'src/app/models/allPosts';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ourMissionList: OurMission [] = [];
  categoryBlock: Category[] = [];
  authorsList: Authors[] = [];
  socialFoto: socPages[] = []
  feauteredPost: Posts[] = []
  allPosts: Posts[] = []


  constructor(private request: RequestService){}

  ngOnInit(){
    this.getOurList()
    this.getCategorys()
    this.getAuthorList()
    this.getPosts()
  }
  getPosts(){
    this.request.getData<Posts[]>(environment.posts.get+ "/?_start=16&_end=17").subscribe((item)=>{
      this.feauteredPost = item
    })
    this.request.getData<Posts[]>(environment.posts.get+ "/?_start=12&_end=16").subscribe((posts)=>{
      this.allPosts = posts
    })
  }

  getOurList(){
    this.request.getData<OurMission []>(environment.ourList.get+ "/?_start=2&_end=4").subscribe((item)=>{
      this.ourMissionList = item
    })
  }

  getCategorys(){
    this.request.getData<Category[]>(environment.categorys.get).subscribe((item)=>{
      this.categoryBlock = item
    })
  }

  getAuthorList(){
    this.request.getData<Authors []>(environment.authorList.get + '/?_limit=4').subscribe((authors)=>{
      this.authorsList = authors
    })
    this.request.getData<socPages []>(environment.socialList.get).subscribe((socialList)=>{
      this.socialFoto = socialList
    })
  }
}

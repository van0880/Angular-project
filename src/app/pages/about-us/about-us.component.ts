import { Component, OnInit } from '@angular/core';
import { OurMission } from 'src/app/models/ourMission';
import { Authors, socPages} from '../../models/authorsList'
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  ourList: OurMission [] = [];
  authorsList: Authors[] = [];
  socialFoto: socPages[] = []
  
  constructor(private request: RequestService ){}

  ngOnInit(){
    this.getOurList()
    this.getAuthorList()
  }
 
  getOurList(){
    this.request.getData<OurMission []>(environment.ourList.get+ "/?_limit=2").subscribe((item)=>{
      this.ourList = item
    })
  }
  
  getAuthorList(){
    this.request.getData<Authors []>(environment.authorList.get).subscribe((authors)=>{
      this.authorsList = authors
    })
    this.request.getData<socPages []>(environment.socialList.get).subscribe((socialList)=>{
      this.socialFoto = socialList
    })
  }
  
}

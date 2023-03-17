import { Component, ViewChild } from '@angular/core';
import { Posts } from 'src/app/models/allPosts';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent {
  dataSource = new MatTableDataSource<Posts>;
  displayedColumns: string[] = ['category', 'name', 'date','title',  'img', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  formPosts: FormGroup = new FormGroup({})
  display: boolean = false
  form_btn: string = ""
  idPost: number | string = 0
  constructor(private request: RequestService, public fb: FormBuilder){}

  ngOnInit():void{
    this.getPosts()
    
    this.formPosts = this.fb.group({
      category: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      name: ['',  [Validators.required, Validators.minLength(3)]],
      date: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      text: ['', [Validators.required, Validators.minLength(10)]],
      img: ['', Validators.required],
    })
  
  }
  ngAfterViewInit() :void{
    this.dataSource.paginator = this.paginator;
  }
  getPosts() :void{
    this.request.getData<Posts []>(environment.posts.get).subscribe((posts)=>{
      this.dataSource = new MatTableDataSource(posts)
      this.dataSource.paginator = this.paginator
    })
  }

  deletePost(id: number | string){
    if(confirm('Delete This Item?')== true){
      this.request.deleteData(environment.posts.get + `/${id}`).subscribe((element)=>{
        this.getPosts()
      })
    }
  }

  editPost(element: Posts){
    this.formPosts.patchValue({
      category: element.category,
      name: element.name,
      date: element.date,
      title: element.title,
      text: element.text,
      img: element.img
    })
    this.display = !this.display
    this.idPost = element.id
    this.form_btn = "edit"
  }
  save_btn(){
    let obj = this.formPosts.value
    if(this.form_btn == "edit"){
      this.request.putData<Posts[]>(environment.posts.get + `/${this.idPost}`, obj).subscribe((element)=>{
        this.getPosts()
      })
    }else if(this.form_btn == "add"){
      this.request.postData<Posts[]>(environment.posts.get, obj).subscribe((element)=>{
        this.getPosts()
      })
    }
    this.display = !this.display
  }

  addPost(){
 
    this.formPosts.patchValue({
      category: "",
      name: "",
      date:"",
      title: "",
      text: "",
      img: ""
    })
    this.display = !this.display
    this.form_btn = "add"
   }

   search():void{
    let search = document.getElementById('search') as HTMLInputElement
    this.request.getData<Posts []>(environment.posts.get + `?q=${search.value}`).subscribe((posts)=>{
      this.dataSource = new MatTableDataSource(posts)
      this.dataSource.paginator = this.paginator
    })
   }
}

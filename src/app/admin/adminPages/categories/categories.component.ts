import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/categorysBlock';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';
import {AfterViewInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['title', 'text', 'img', 'action'];
  dataSource = new MatTableDataSource<Category>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  formCategories: FormGroup = new FormGroup({})
  display: boolean = false
  form_btn: string = ""
  idCategory: number | string = 0

  constructor(private request: RequestService, public fb: FormBuilder){}

  ngOnInit(){
    this.getCategories()
    
    this.formCategories = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      text: ['',  [Validators.required, Validators.minLength(5)]],
      img: ['', Validators.required],
      
    })
  }
  getCategories(){
    this.request.getData<Category []>(environment.categorys.get).subscribe((element)=>{
      this.dataSource = new MatTableDataSource(element)
      this.dataSource.paginator = this.paginator
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteCategory(id: number | string){
    if(confirm('Delete This Item?')== true){
      this.request.deleteData(environment.categorys.get + `/${id}`).subscribe((element)=>{
        this.getCategories()
      })
    }
  }
  editCategory(element: Category){
    this.formCategories.patchValue({
      name: element.title,
      text: element.text,
      img: element.img
    })
    this.display = !this.display
    this.idCategory = element.id
    this.form_btn = "edit"
  }

  save_btn(){
    let obj = this.formCategories.value
    if(this.form_btn == "edit"){
      this.request.putData<Category[]>(environment.categorys.get + `/${this.idCategory}`, obj).subscribe((element)=>{
        this.getCategories()
      })
    }else if(this.form_btn == "add"){
      this.request.postData<Category[]>(environment.categorys.get, obj).subscribe((element)=>{
        this.getCategories()
      })
    }
    this.display = !this.display
  }

  addCategory(){
    this.formCategories.patchValue({
      name: "",
      text: "",
      img: ""
    })
    this.display = !this.display
    this.form_btn = "add"
   }


  
}




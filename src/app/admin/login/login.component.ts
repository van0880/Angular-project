import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenType } from 'src/app/models/tokes';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  form:FormGroup = new FormGroup({})
  hide: Boolean = true
  constructor(private request: RequestService, public fb: FormBuilder, private router: Router){}

  ngOnInit(): void{
    this.form = this.fb.group({
      email: ['eve.holt@reqres.in',[Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]], 
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  
  send(): void{
    this.request.loginRequest<TokenType>('https://reqres.in/api/login', this.form.value).subscribe((elem:TokenType)=>{
      if('token' in elem && elem.token != undefined){
        localStorage.setItem('token', elem.token)
        this.router.navigate(['admin'])
      }     
    })
  }
}

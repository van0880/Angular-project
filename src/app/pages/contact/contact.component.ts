import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(public fb: FormBuilder){}

  ngOnInit():void{
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      email: ["", Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)],
      query: ['', Validators.required],
      message: ""
    })
  }
}

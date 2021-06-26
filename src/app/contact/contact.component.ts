import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import './../../assets/smtp/smtp.js';
declare let Email :any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  exform: FormGroup
  constructor(private data: FormBuilder) { 
    this.exform = this.data.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
    })
   }


  ngOnInit() {
    
  }

  onSubmit(){ 
    Email.send({
      Host: 'smtp.elasticemail.com',
      Port:2525,
      EnableSsl : true,
      SecureToken : '9e45cf0f-f6cc-4808-abea-edcc61c7bb69',
      Username : 'ajaye995@gmail.com',
      Password : '3554B35A03CBD831087637E799374E527739',
      To : this.exform.value.email,
      From : "ajaye995@gmail.com",
      Subject : "Hello",
      Body : 'hi welcome',
      
  }).then( (message:any) => {alert(message); this.exform.reset(); } );
  }

}

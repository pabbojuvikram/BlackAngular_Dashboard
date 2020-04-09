import { Component, OnInit,ViewChild, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
// import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:any;
  @ViewChild('form') sgForm: NgForm;
  // username:string=this.sgForm.value.email;

  // c to p
  @Output()
  notify:EventEmitter<string> =new EventEmitter<string>();
 
  passdata(){
    this.notify.emit("iam in parent to child");
  }

  // 
  constructor() { }
 

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.sgForm.value);
    // console.log(this.sgForm.value.email);
    this.username = this.sgForm.value.email;
  }
}

import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {InteractionService} from '../../interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') sgForm: NgForm;
  username:any;
  message:string;
  constructor(private service:InteractionService) { }

  ngOnInit(): void {
    this.service.currentMessage.subscribe(message => this.message = message)
  }
  onSubmit(text) {

    console.log(this.sgForm.value);
    console.log(this.sgForm.value.email);
    this.username = this.sgForm.value.email;
    this.service.changeMessage(this.sgForm.value.email);
  }
  // newMessage(){
  //   this.service.changeMessage(this.sgForm.value.email);
  // }
}

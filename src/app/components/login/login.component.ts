import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  public userEmail = '';
  public userPassword = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.auth.isAuth()) {
      this.router.navigate(['/users']);
    }
  }

  public onSubmit() {
    this.auth.logIn(this.userEmail, this.userPassword);
    if (this.auth.isAuth()) {
      this.router.navigate(['/users']);
    }
    this.form.resetForm();
  }
}

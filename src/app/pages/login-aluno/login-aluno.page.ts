import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageFormAluno } from './login-aluno.page.form';

@Component({
  selector: 'app-login-aluno',
  templateUrl: './login-aluno.page.html',
  styleUrls: ['./login-aluno.page.scss'],
})
export class LoginAlunoPage implements OnInit {

  private form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new LoginPageFormAluno(this.formBuilder).createForm();
  }

  login(){
    this.router.navigate(['home-aluno']);
  }

  voltar(){
    this.router.navigate(['home']);
  }

}

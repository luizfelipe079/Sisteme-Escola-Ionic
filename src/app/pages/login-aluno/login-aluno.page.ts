import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';
import { LoginPageFormAluno } from './login-aluno.page.form';

@Component({
  selector: 'app-login-aluno',
  templateUrl: './login-aluno.page.html',
  styleUrls: ['./login-aluno.page.scss'],
})
export class LoginAlunoPage implements OnInit {

  form: FormGroup;
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };
  

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private auth: AuthService) { }

  ngOnInit() {
    this.form = new LoginPageFormAluno(this.formBuilder).createForm();
  }

  login(){
    this.auth.authenticate(this.creds)
      .subscribe( response => {
        console.log(response.headers.get('Authorization'));
        this.router.navigate(['home-aluno']);
      },
      error => {});
  }

  voltar(){
    this.router.navigate(['home']);
  }

}

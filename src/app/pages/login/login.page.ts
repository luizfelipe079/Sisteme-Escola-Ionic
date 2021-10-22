import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';
import { LoginPageForm } from './login.page.forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private auth: AuthService
    ) { }

  ngOnInit() { 
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login(){
    this.auth.authenticate(this.creds)
      .subscribe( response => {
        console.log(response.headers.get('Authorization'));
        this.router.navigate(['home-professor']);
      },
      error => {});
  }

  cadastro() {
    this.router.navigate(['cadastro']);
  }

  voltar(){
    this.router.navigate(['home']);
  }
}

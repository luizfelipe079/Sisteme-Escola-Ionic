import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';
import { StorageService } from 'src/services/storage.service';
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
    private auth: AuthService,
    private storage: StorageService,
    private alertController: AlertController) { } 

  ngOnInit() {
    this.form = new LoginPageFormAluno(this.formBuilder).createForm();

    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.router.navigate(['home-aluno'])
      });
  }

  login(){
    this.auth.authenticate(this.creds)
      .subscribe( response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.router.navigate(['home-aluno']);
      },
      error => {
        // this.presentAlert();
      });
  }

  voltar(){
    this.storage.setLocalUser(null);
    this.router.navigate(['home']);
  }

  EsqueciASenha(){
    this.router.navigate(['esqueci-senha']);
  }

}

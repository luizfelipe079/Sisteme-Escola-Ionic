import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';
import { EsqueciSenha } from './esqueci-senha.page.form';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {

  form: FormGroup;
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private auth:AuthService) { }

  ngOnInit() {
    this.form = new EsqueciSenha(this.formBuilder).createForm();
  }

  recuperarSenha(){
    this.auth.forgortPassword(this.creds)
      .subscribe( response => {
        console.log(response.status);
        this.presentAlert();
        this.router.navigate(['login-aluno']);
      },
      
      error => {
        console.log(error);
      });

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Senha Recuperada',
      message: 'Sua senha já foi enviada para o email cadastrado!',
      buttons: ['OK']
    });

    await alert.present();
  }

  voltar(){
    this.router.navigate(['login-aluno']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProfessorService } from 'src/services/professor.service';
import { CadastroPageForm } from './cadastro.page.form';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastroForm: CadastroPageForm;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private professorService: ProfessorService,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.createForm();
  }

  voltar(){
    this.router.navigate(['home-professor']);
  }

  cadastrarProfessor(){
    this.cadastroForm.getForm().markAllAsTouched();

    if(this.cadastroForm.getForm().valid){

      this.professorService.insert(this.cadastroForm.getForm().value)
        .subscribe(response => {
          this.presentAlert();
        },
        error => {
          if(error.status == 500){
            this.erroCadastroAlert();
          }
        });
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Conta Criada com Sucesso!',
      message: 'Email de confirmação foi enviado!',
      buttons: 
        [{
          text: 'OK',
          handler: () => {
            this.router.navigate(['home-professor']);
          }
        }]
    });

    await alert.present();
  }

  async erroCadastroAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Erro 500',
      message: 'O email já foi utilizado!',
      buttons: 
        [{
          text: 'OK'
        }]
    });

    await alert.present();
  }

  private createForm() {
    this.cadastroForm = new CadastroPageForm(this.formBuilder);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DisciplinaService } from 'src/services/disciplina.service';
import { CadastroDisciplinaPageForm } from './cadastro-disciplina.page.form';

@Component({
  selector: 'app-cadastro-disciplina',
  templateUrl: './cadastro-disciplina.page.html',
  styleUrls: ['./cadastro-disciplina.page.scss'],
})
export class CadastroDisciplinaPage implements OnInit {

  cadastroForm: CadastroDisciplinaPageForm;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private disciplinaService: DisciplinaService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.createForm();
  }

  cadastrarDisciplina(){
    this.cadastroForm.getForm().markAllAsTouched();

    if(this.cadastroForm.getForm().valid){
      console.log(this.cadastroForm.getForm().value);

      this.disciplinaService.insert(this.cadastroForm.getForm().value)
        .subscribe(response => {
          this.presentAlert();
        },
        error => {
          if(error.status == 500){
            this.erroAlerta()
          }
        });
    }
  }

  voltar(){
    this.router.navigate(['home-professor']);
  } 

  async erroAlerta(){
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Erro 500',
      message: 'A disciplina já existe',
      buttons: 
        [{
          text: 'OK'
        }]
    });

    await alert.present();
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
  
  private createForm() {
    this.cadastroForm = new CadastroDisciplinaPageForm(this.formBuilder);
  }

}

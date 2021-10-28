import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlunoService } from 'src/services/aluno.service';
import { CadastroAlunoPageForm } from './cadastro-aluno.page.form';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
})
export class CadastroAlunoPage implements OnInit {

  cadastroForm: CadastroAlunoPageForm;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.createForm();
  }

  voltar(){
    this.router.navigate(['home-professor']);
  }

  private createForm() {
    this.cadastroForm = new CadastroAlunoPageForm(this.formBuilder);
  }

  cadastroAluno(){
    this.cadastroForm.getForm().markAllAsTouched();

    if(this.cadastroForm.getForm().valid){

      this.alunoService.insert(this.cadastroForm.getForm().value)
        .subscribe(response => {
          this.presentAlert();
        },
        error => {});
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

}

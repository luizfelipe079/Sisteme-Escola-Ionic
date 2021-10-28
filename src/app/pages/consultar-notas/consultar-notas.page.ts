import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlunoDTO } from 'src/models/aluno.dto';
import { DisciplinaDTO } from 'src/models/disciplina.dto';
import { NotaDTO } from 'src/models/nota.dto';
import { ProfessorDTO } from 'src/models/professor.dto';
import { AlunoService } from 'src/services/aluno.service';
import { DisciplinaService } from 'src/services/disciplina.service';
import { NotaService } from 'src/services/nota.service';
import { ProfessorService } from 'src/services/professor.service';
import { StorageService } from 'src/services/storage.service';
import { consultarNotasPageForm } from './consultar-notas.page.form';

@Component({
  selector: 'app-consultar-notas',
  templateUrl: './consultar-notas.page.html',
  styleUrls: ['./consultar-notas.page.scss'],
})
export class ConsultarNotasPage implements OnInit {

  form: FormGroup;
  professor: ProfessorDTO;
  alunos: AlunoDTO[];
  disciplinas: DisciplinaDTO[];
  id_aluno: string;
  id_disciplina: string;
  nota: NotaDTO;

  constructor(
    private storage: StorageService,
    private professorService: ProfessorService,
    private alunoService: AlunoService,
    private disciplinaService: DisciplinaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private notaService: NotaService
  ) { }

  ngOnInit() {
    this.form = new consultarNotasPageForm(this.formBuilder).createForm();
    
    let localUser = this.storage.getLocalUser();
    
    if(localUser && localUser.email) {
      this.professorService.findByEmail(localUser.email)
        .subscribe(response => {
          this.professor = response;
        },
        error => {
          if(error.status == 403) {
            this.router.navigate(['login']);
          }
          if(error.status == 500) {
            this.presentAlert();
            this.storage.setLocalUser(null);
          }
        });
    } else {
      this.router.navigate(['login']);
    }

    this.alunoService.findAllAlunos()
      .subscribe(response => {
        this.alunos = response;
        this.form.controls.aluno.setValue(this.alunos[0].id);
      },
      error => {});

    this.disciplinaService.findAllDisciplinas()
      .subscribe(response => {
        this.disciplinas = response;
        this.form.controls.disciplina.setValue(this.disciplinas[0].id);
      },
      error => {});
  }

  buscarNotas(){
    this.notaService.findNotaDisciplina(this.id_aluno, this.id_disciplina)
      .subscribe( response => {
        this.nota = response;
        
        if(this.nota.id == null) {
          this.alunoNaoExisteNaDisciplinaAlert();
        } else {
          this.alunoNotaAlert();
        }
      },
      error => {});

  }

  voltar(){
    this.router.navigate(['home-professor']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Acesso Negado! ',
      message: 'Você não é um professor, entre como aluno!',
      buttons: 
        [{
          text: 'OK',
          handler: () => {
            this.router.navigate(['home']);
          }
        }]
    });

    await alert.present();
  }

  async alunoNaoExisteNaDisciplinaAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Erro 500',
      message: 'Aluno não pertence a Disciplina Ou não possui notas na Disciplina!',
      buttons: 
        [{
          text: 'OK',
        }]
    });

    await alert.present();
  }

  async alunoNotaAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert', 
      header: `Notas:`,
      message: `
        <p>Aluno ${this.nota.aluno.nome}</p>
        <p> 1º Nota : ${this.nota.nota1}</p>
        <p> 2º Nota : ${this.nota.nota2}</p>
      `,
      buttons: 
        [{
          text: 'OK',
        }]
    });

    await alert.present();
  }
}


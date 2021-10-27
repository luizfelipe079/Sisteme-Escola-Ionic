import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlunoDTO } from 'src/models/aluno.dto';
import { DisciplinaDTO } from 'src/models/disciplina.dto';
import { ProfessorDTO } from 'src/models/professor.dto';
import { AlunoService } from 'src/services/aluno.service';
import { DisciplinaService } from 'src/services/disciplina.service';
import { ProfessorService } from 'src/services/professor.service';
import { StorageService } from 'src/services/storage.service';
import { AddAlunoDisciplinasPageForm } from './add-aluno-disciplinas.page.form';

@Component({
  selector: 'app-add-aluno-disciplinas',
  templateUrl: './add-aluno-disciplinas.page.html',
  styleUrls: ['./add-aluno-disciplinas.page.scss'],
})
export class AddAlunoDisciplinasPage implements OnInit {

  form: FormGroup;
  professor: ProfessorDTO;
  alunos: AlunoDTO[];
  disciplinas: DisciplinaDTO[];
  id_aluno: string;
  id_disciplina: string;

  constructor(
    private storage: StorageService,
    private professorService: ProfessorService,
    private router: Router,
    private alertController: AlertController,
    private alunoService: AlunoService,
    private disciplinaService: DisciplinaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = new AddAlunoDisciplinasPageForm(this.formBuilder).createForm();
    
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
      error => {

      });

    this.disciplinaService.findAllDisciplinas()
      .subscribe(response => {
        this.disciplinas = response;
        this.form.controls.disciplina.setValue(this.disciplinas[0].id);
      })
  }

  voltar(){
    this.router.navigate(['home-professor']);
  }

  adicionarAluno(){
    console.log(this.form.value);
    console.log(this.id_aluno);
    console.log(this.id_disciplina);
    this.alunoService.inserirAlunoDisciplina(this.id_aluno, this.id_disciplina)
      .subscribe(response => {
        this.cadstroAlert();
      },
      error => {
        if(error.status == 500) {
          this.erroCadastroAlert();
        }
      });
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


  async cadstroAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Incrição realizada com Sucesso!',
      message: 'O aluno foi adicionado a Disciplina!',
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
      message: 'O aluno já pertence a Disciplina!',
      buttons: 
        [{
          text: 'OK'
        }]
    });

    await alert.present();
  }

}

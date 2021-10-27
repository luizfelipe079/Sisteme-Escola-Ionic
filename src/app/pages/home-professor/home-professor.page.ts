import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { ProfessorDTO } from 'src/models/professor.dto';
import { ProfessorService } from 'src/services/professor.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-home-professor',
  templateUrl: './home-professor.page.html',
  styleUrls: ['./home-professor.page.scss'],
})
export class HomeProfessorPage implements OnInit {

  professor: ProfessorDTO;

  constructor(
    public professorService: ProfessorService,
    public storage: StorageService,
    private router: Router,
    private alertController: AlertController
    ) { }

  ngOnInit() {

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
  }

  logout(){
    this.storage.setLocalUser(null);
    this.router.navigate(['home']);
  }

  cadastroProfessor(){
    this.router.navigate(['cadastro']);
  }

  cadastroAluno(){
    this.router.navigate(['cadastro-aluno']);
  }

  cadastroDisciplina(){
    this.router.navigate(['cadastro-disciplina']);
  }

  adicionarAluno(){
    this.router.navigate(['add-aluno-disciplinas'])
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
}

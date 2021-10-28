import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlunoDTO } from 'src/models/aluno.dto';
import { NotaDTO } from 'src/models/nota.dto';
import { AlunoService } from 'src/services/aluno.service';
import { NotaService } from 'src/services/nota.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-home-aluno',
  templateUrl: './home-aluno.page.html',
  styleUrls: ['./home-aluno.page.scss'],
})
export class HomeAlunoPage implements OnInit {

  able: boolean;
  aluno: AlunoDTO;
  notas: NotaDTO[];

  constructor(
    public alunoService: AlunoService,
    public storage: StorageService,
    public router: Router,
    private notaService: NotaService,
  ) { }

  ngOnInit() {

    let localUser = this.storage.getLocalUser();

    if(localUser && localUser.email) {
      this.alunoService.findByEmail(localUser.email)
        .subscribe(response => {
          this.aluno = response;
        },
        error => {
          if(error.status == 403) {
            this.router.navigate(['login']);
          }
        });
    } else {
      this.router.navigate(['login']);
    }

  }

  
  verNotas(){

    let id = this.aluno.id;

    this.notaService.findAllNotasAluno(id)
      .subscribe(response => {
        this.notas = response;
        this.able = true;
        
      },
      error => {

      });
  }

  logout(){
    this.storage.setLocalUser(null);
    this.router.navigate(['home']);
  }

}

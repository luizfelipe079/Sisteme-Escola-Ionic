import { Component, OnInit } from '@angular/core';
import { AlunoDTO } from 'src/models/aluno.dto';
import { AlunoService } from 'src/services/aluno.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-home-aluno',
  templateUrl: './home-aluno.page.html',
  styleUrls: ['./home-aluno.page.scss'],
})
export class HomeAlunoPage implements OnInit {

  aluno: AlunoDTO;

  constructor(
    public alunoService: AlunoService,
    public storage: StorageService
  ) { }

  ngOnInit() {

    let localUser = this.storage.getLocalUser();

    if(localUser && localUser.email) {
      this.alunoService.findByEmail(localUser.email)
        .subscribe(response => {
          this.aluno = response;
        },
        error => {});
    }

  }

}

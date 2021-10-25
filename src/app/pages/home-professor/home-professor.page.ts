import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
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
}

import { Component, OnInit } from '@angular/core';
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
    public storage: StorageService
    ) { }

  ngOnInit() {

    let localUser = this.storage.getLocalUser();
    
    if(localUser && localUser.email) {
      this.professorService.findByEmail(localUser.email)
        .subscribe(response => {
          this.professor = response;
        },
        error => {});
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-aluno',
  templateUrl: './login-aluno.page.html',
  styleUrls: ['./login-aluno.page.scss'],
})
export class LoginAlunoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['home-aluno']);
  }

  voltar(){
    this.router.navigate(['home']);
  }

}

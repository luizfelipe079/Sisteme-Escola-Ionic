import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasAlunoPage } from './notas-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: NotasAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasAlunoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAlunoDisciplinasPage } from './add-aluno-disciplinas.page';

const routes: Routes = [
  {
    path: '',
    component: AddAlunoDisciplinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAlunoDisciplinasPageRoutingModule {}

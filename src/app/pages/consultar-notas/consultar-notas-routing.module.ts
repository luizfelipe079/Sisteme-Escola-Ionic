import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarNotasPage } from './consultar-notas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarNotasPageRoutingModule {}

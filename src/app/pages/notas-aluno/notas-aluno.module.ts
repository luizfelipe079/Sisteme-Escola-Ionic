import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasAlunoPageRoutingModule } from './notas-aluno-routing.module';

import { NotasAlunoPage } from './notas-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasAlunoPageRoutingModule
  ],
  declarations: [NotasAlunoPage]
})
export class NotasAlunoPageModule {}

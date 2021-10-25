import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDisciplinaPageRoutingModule } from './cadastro-disciplina-routing.module';

import { CadastroDisciplinaPage } from './cadastro-disciplina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDisciplinaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroDisciplinaPage]
})
export class CadastroDisciplinaPageModule {}

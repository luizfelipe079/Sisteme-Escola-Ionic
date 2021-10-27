import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAlunoDisciplinasPageRoutingModule } from './add-aluno-disciplinas-routing.module';

import { AddAlunoDisciplinasPage } from './add-aluno-disciplinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAlunoDisciplinasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddAlunoDisciplinasPage]
})
export class AddAlunoDisciplinasPageModule {}

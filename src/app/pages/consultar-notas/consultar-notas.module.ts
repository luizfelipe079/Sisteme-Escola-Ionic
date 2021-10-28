import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarNotasPageRoutingModule } from './consultar-notas-routing.module';

import { ConsultarNotasPage } from './consultar-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarNotasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConsultarNotasPage]
})
export class ConsultarNotasPageModule {}

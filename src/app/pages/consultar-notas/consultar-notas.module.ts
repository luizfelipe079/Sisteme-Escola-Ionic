import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarNotasPageRoutingModule } from './consultar-notas-routing.module';

import { ConsultarNotasPage } from './consultar-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarNotasPageRoutingModule
  ],
  declarations: [ConsultarNotasPage]
})
export class ConsultarNotasPageModule {}

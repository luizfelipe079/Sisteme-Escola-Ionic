import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueciSenhaPageRoutingModule } from './esqueci-senha-routing.module';

import { EsqueciSenhaPage } from './esqueci-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueciSenhaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EsqueciSenhaPage]
})
export class EsqueciSenhaPageModule {}

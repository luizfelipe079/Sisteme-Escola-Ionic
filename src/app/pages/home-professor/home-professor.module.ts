import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeProfessorPageRoutingModule } from './home-professor-routing.module';

import { HomeProfessorPage } from './home-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProfessorPageRoutingModule
  ],
  declarations: [HomeProfessorPage]
})
export class HomeProfessorPageModule {}

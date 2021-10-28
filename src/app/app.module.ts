import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from 'src/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from 'src/services/storage.service';
import { ProfessorService } from 'src/services/professor.service';
import { AlunoService } from 'src/services/aluno.service';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from './interceptors/error-intercept';
import { DisciplinaService } from 'src/services/disciplina.service';
import { NotaService } from 'src/services/nota.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }, 
    ErrorInterceptorProvider,
    AuthInterceptorProvider,
    AuthService, 
    StorageService, 
    ProfessorService,
    AlunoService,
    DisciplinaService,
    NotaService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

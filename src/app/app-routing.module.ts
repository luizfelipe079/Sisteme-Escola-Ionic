import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'home-professor',
    loadChildren: () => import('./pages/home-professor/home-professor.module').then( m => m.HomeProfessorPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login-aluno',
    loadChildren: () => import('./pages/login-aluno/login-aluno.module').then( m => m.LoginAlunoPageModule)
  },
  {
    path: 'home-aluno',
    loadChildren: () => import('./pages/home-aluno/home-aluno.module').then( m => m.HomeAlunoPageModule)
  },
  {
    path: 'cadastro-aluno',
    loadChildren: () => import('./pages/cadastro-aluno/cadastro-aluno.module').then( m => m.CadastroAlunoPageModule)
  },
  {
    path: 'consultar-notas',
    loadChildren: () => import('./pages/consultar-notas/consultar-notas.module').then( m => m.ConsultarNotasPageModule)
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./pages/esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

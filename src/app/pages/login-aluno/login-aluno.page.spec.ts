import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginAlunoPage } from './login-aluno.page';

describe('LoginAlunoPage', () => {
  let component: LoginAlunoPage;
  let fixture: ComponentFixture<LoginAlunoPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAlunoPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginAlunoPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home on login', () => {
    spyOn(router, 'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledOnceWith(['home-aluno']);
  });

  it('should return to home on login', () => {
    spyOn(router, 'navigate');

    component.voltar();

    expect(router.navigate).toHaveBeenCalledOnceWith(['home']);
  });
});

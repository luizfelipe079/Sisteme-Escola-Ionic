import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);

    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home on login', () => {
    spyOn(router, 'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledOnceWith(['home-professor']);
  });

  it('should go to home on cadastro', () => {
    spyOn(router, 'navigate');

    component.cadastro();

    expect(router.navigate).toHaveBeenCalledOnceWith(['cadastro']);
  });

  it('should return to home on login', () => {
    spyOn(router, 'navigate');

    component.voltar();

    expect(router.navigate).toHaveBeenCalledOnceWith(['home']);
  });
});

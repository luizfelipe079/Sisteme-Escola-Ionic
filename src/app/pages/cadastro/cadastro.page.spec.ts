import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CadastroPage } from './cadastro.page';

describe('CadastroPage', () => {
  let component: CadastroPage;
  let fixture: ComponentFixture<CadastroPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should return to home on login', () => {
    spyOn(router, 'navigate');

    component.voltar();

    expect(router.navigate).toHaveBeenCalledOnceWith(['login']);
  });
});

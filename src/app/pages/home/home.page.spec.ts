import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home on login like Professor', () => {
    spyOn(router, 'navigate');

    component.loginProfessor();

    expect(router.navigate).toHaveBeenCalledOnceWith(['home-professor']);
  });

  it('should go to home on login like Aluno', () => {
    spyOn(router, 'navigate');

    component.loginAluno();

    expect(router.navigate).toHaveBeenCalledOnceWith(['login-aluno']);
  });
});

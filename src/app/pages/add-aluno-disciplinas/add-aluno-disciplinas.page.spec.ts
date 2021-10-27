import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAlunoDisciplinasPage } from './add-aluno-disciplinas.page';

describe('AddAlunoDisciplinasPage', () => {
  let component: AddAlunoDisciplinasPage;
  let fixture: ComponentFixture<AddAlunoDisciplinasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlunoDisciplinasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAlunoDisciplinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

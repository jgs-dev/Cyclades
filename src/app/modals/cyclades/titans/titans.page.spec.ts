import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitansPage } from './titans.page';

describe('TitansPage', () => {
  let component: TitansPage;
  let fixture: ComponentFixture<TitansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

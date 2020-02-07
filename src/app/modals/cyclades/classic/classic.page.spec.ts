import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassicPage } from './classic.page';

describe('ClassicPage', () => {
  let component: ClassicPage;
  let fixture: ComponentFixture<ClassicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

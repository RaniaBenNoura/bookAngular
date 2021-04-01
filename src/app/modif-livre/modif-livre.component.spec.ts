import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifLivreComponent } from './modif-livre.component';

describe('ModifLivreComponent', () => {
  let component: ModifLivreComponent;
  let fixture: ComponentFixture<ModifLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

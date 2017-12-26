import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo404Component } from './exemplo404.component';

describe('Exemplo404Component', () => {
  let component: Exemplo404Component;
  let fixture: ComponentFixture<Exemplo404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo7Component } from './exemplo7.component';

describe('Exemplo7Component', () => {
  let component: Exemplo7Component;
  let fixture: ComponentFixture<Exemplo7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

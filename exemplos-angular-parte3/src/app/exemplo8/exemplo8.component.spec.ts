import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo8Component } from './exemplo8.component';

describe('Exemplo8Component', () => {
  let component: Exemplo8Component;
  let fixture: ComponentFixture<Exemplo8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { Exemplo8Service } from './exemplo8.service';

describe('Exemplo8Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Exemplo8Service]
    });
  });

  it('should be created', inject([Exemplo8Service], (service: Exemplo8Service) => {
    expect(service).toBeTruthy();
  }));
});

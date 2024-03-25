import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { verificarGerenteGuard } from './verificar-gerente.guard';

describe('verificarGerenteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verificarGerenteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

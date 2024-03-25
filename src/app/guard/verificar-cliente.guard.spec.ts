import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { verificarClienteGuard } from './verificar-cliente.guard';

describe('verificarClienteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verificarClienteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

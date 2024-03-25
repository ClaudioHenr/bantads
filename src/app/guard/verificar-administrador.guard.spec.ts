import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { verificarAdministradorGuard } from './verificar-administrador.guard';

describe('verificarAdministradorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verificarAdministradorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

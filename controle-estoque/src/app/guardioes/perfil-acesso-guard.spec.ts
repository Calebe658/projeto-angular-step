import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { perfilAcessoGuard } from './perfil-acesso-guard';

describe('perfilAcessoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => perfilAcessoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { usuarioLogueadoGuard } from './usuario-logueado.guard';

describe('UsuariuoLogueado7usuarioLogueadoGuard', () => {
  let guard: usuarioLogueadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(usuarioLogueadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarGerenteAdministradorComponent } from './alterar-gerente-administrador.component';

describe('AlterarGerenteAdministradorComponent', () => {
  let component: AlterarGerenteAdministradorComponent;
  let fixture: ComponentFixture<AlterarGerenteAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarGerenteAdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlterarGerenteAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

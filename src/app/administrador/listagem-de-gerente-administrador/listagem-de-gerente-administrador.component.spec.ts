import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDeGerenteAdministradorComponent } from './listagem-de-gerente-administrador.component';

describe('ListagemDeGerenteAdministradorComponent', () => {
  let component: ListagemDeGerenteAdministradorComponent;
  let fixture: ComponentFixture<ListagemDeGerenteAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemDeGerenteAdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemDeGerenteAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

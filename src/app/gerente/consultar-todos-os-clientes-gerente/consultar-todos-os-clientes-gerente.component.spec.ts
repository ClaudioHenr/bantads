import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTodosOsClientesGerenteComponent } from './consultar-todos-os-clientes-gerente.component';

describe('ConsultarTodosOsClientesGerenteComponent', () => {
  let component: ConsultarTodosOsClientesGerenteComponent;
  let fixture: ComponentFixture<ConsultarTodosOsClientesGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarTodosOsClientesGerenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarTodosOsClientesGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

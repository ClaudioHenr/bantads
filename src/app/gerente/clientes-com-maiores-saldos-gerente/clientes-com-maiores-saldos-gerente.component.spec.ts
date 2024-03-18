import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesComMaioresSaldosGerenteComponent } from './clientes-com-maiores-saldos-gerente.component';

describe('ClientesComMaioresSaldosGerenteComponent', () => {
  let component: ClientesComMaioresSaldosGerenteComponent;
  let fixture: ComponentFixture<ClientesComMaioresSaldosGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesComMaioresSaldosGerenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientesComMaioresSaldosGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

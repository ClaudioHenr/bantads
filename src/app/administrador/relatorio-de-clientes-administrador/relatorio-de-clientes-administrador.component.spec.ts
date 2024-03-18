import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDeClientesAdministradorComponent } from './relatorio-de-clientes-administrador.component';

describe('RelatorioDeClientesAdministradorComponent', () => {
  let component: RelatorioDeClientesAdministradorComponent;
  let fixture: ComponentFixture<RelatorioDeClientesAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioDeClientesAdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatorioDeClientesAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

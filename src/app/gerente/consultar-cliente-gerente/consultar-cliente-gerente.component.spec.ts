import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarClienteGerenteComponent } from './consultar-cliente-gerente.component';

describe('ConsultarClienteGerenteComponent', () => {
  let component: ConsultarClienteGerenteComponent;
  let fixture: ComponentFixture<ConsultarClienteGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarClienteGerenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarClienteGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

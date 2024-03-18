import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarExtratoClienteComponent } from './consultar-extrato-cliente.component';

describe('ConsultarExtratoClienteComponent', () => {
  let component: ConsultarExtratoClienteComponent;
  let fixture: ComponentFixture<ConsultarExtratoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarExtratoClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarExtratoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

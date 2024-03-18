import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaClienteComponent } from './transferencia-cliente.component';

describe('TransferenciaClienteComponent', () => {
  let component: TransferenciaClienteComponent;
  let fixture: ComponentFixture<TransferenciaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferenciaClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferenciaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositarClienteComponent } from './depositar-cliente.component';

describe('DepositarClienteComponent', () => {
  let component: DepositarClienteComponent;
  let fixture: ComponentFixture<DepositarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositarClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

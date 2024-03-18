import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaqueClienteComponent } from './saque-cliente.component';

describe('SaqueClienteComponent', () => {
  let component: SaqueClienteComponent;
  let fixture: ComponentFixture<SaqueClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaqueClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaqueClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

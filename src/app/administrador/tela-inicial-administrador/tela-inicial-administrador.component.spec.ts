import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialAdministradorComponent } from './tela-inicial-administrador.component';

describe('TelaInicialAdministradorComponent', () => {
  let component: TelaInicialAdministradorComponent;
  let fixture: ComponentFixture<TelaInicialAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaInicialAdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaInicialAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

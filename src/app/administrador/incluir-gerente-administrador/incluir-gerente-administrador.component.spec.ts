import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirGerenteAdministradorComponent } from './incluir-gerente-administrador.component';

describe('IncluirGerenteAdministradorComponent', () => {
  let component: IncluirGerenteAdministradorComponent;
  let fixture: ComponentFixture<IncluirGerenteAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncluirGerenteAdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncluirGerenteAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

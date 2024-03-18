import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Cliente } from '../../shared/models/cliente.model';
import { Router } from '@angular/router';
import { Endereco } from '../../shared/models/endereco.model';

@Component({
  selector: 'app-autocadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './autocadastro.component.html',
  styleUrl: './autocadastro.component.css'
})
export class AutocadastroComponent {
  @ViewChild('registerForm') registerForm!: NgForm

  client: Cliente = new Cliente()
  address: Endereco = new Endereco()

  constructor(private registerService: RegisterService, private route: Router) { }

  submitRegister() {
    this.registerService.sendDataForRegister(this.client, this.address)
  }
}

import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Cliente } from '../../shared/models/cliente.model';
import { Router } from '@angular/router';
import { Endereco } from '../../shared/models/endereco.model';

@Component({
  selector: 'app-autocadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './autocadastro.component.html',
  styleUrl: './autocadastro.component.css'
})
export class AutocadastroComponent {
  @ViewChild('registerForm') registerForm!: NgForm
  // registerForm : FormGroup

  client: Cliente = new Cliente()
  address: Endereco = new Endereco()

  constructor(private registerService: RegisterService, private route: Router) { }

  submitRegister() {
    this.registerService.sendDataForRegister(this.client, this.address)
  }

  // constructor(private registerService: RegisterService) {
  //   this.registerForm = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     cpf: new FormControl('', [Validators.required, Validators.max(11)]),
  //     address: new FormControl('', Validators.required),
  //     logradouro: new FormControl(''),
  //     numberHome: new FormControl('', Validators.required),

  //     phone: new FormControl('', Validators.required),
  //     password: new FormControl('', Validators.required),
  //   })
  // }

  // submitRegisterForm() {
  //   this.registerService.sendDataForRegister(
  //     this.registerForm.value.name,
  //     this.registerForm.value.email,
  //     this.registerForm.value.cpf,

  //     this.registerForm.value.phone,
  //     this.registerForm.value.password
  //   )
  // }

}

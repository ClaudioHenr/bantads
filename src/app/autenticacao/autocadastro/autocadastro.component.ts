import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  registerForm : FormGroup

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required, Validators.max(11)]),
      address: new FormControl('', Validators.required),
      logradouro: new FormControl(''),
      numberHome: new FormControl('', Validators.required),

      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  submitRegisterForm() {

  }

}

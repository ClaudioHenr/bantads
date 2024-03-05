import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private endpoint = ''

  constructor(private http: HttpClient ) { }

  sendDataForRegister(name: String, email: String, cpf: String, phone: number, password: string) {
    const data = {name, email, cpf, phone, password}
    console.log("Cadastro feito")
    //return this.http.post(this.endpoint, data)
  }
}

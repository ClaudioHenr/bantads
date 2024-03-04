import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private endpointUrl = ''

  //constructor(private http: HttpClient) { }

  sendDataToLogin(email: string, password: string) {
    const data = {email, password}
    console.log("Login feito")
    //return this.http.post(this.endpointUrl, data)
  }

}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Gerente } from '../../shared/models/gerente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  environment = {
    production: false,
    URL_API: "http://localhost:3000"
  };

  constructor(private httpClient: HttpClient) { }


  listarTodos(): Observable<any | null> {
    return this.httpClient.get<any | null> ( this.environment.URL_API + "/gerentes" , this.httpOptions);
  }

  buscaGerente(query: string): Observable<any | null> {
    const params = new HttpParams().set('nome', query);
    return this.httpClient.get<any | null>(`${this.environment.URL_API}/gerentes`, { params });
  }
  cadastrarGerente(gerente: any): Observable<any | null> {
    return this.httpClient.post<any>(
      this.environment.URL_API + '/gerentes',
      gerente,
      this.httpOptions
    );
  }

  atualizarGerente(gerente: any): Observable<any | null> {
    return this.httpClient.post<any>(
      this.environment.URL_API + '/gerentes',
      gerente,
      this.httpOptions
    );
  }

  deletarGerente(id: number): Observable<any | null> {
    return this.httpClient.delete<any>(
      this.environment.URL_API + `/gerentes/${id}`,
      this.httpOptions
    );
  }

}

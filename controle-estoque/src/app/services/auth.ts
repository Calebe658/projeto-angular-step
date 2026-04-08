import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiUrl = 'https://projeto-node-step-git-main-fabios-projects-d2648344.vercel.app/api/auth';
  apiKey = "Step@2025";
  headers = new HttpHeaders({
    'x-api-key': this.apiKey
  });

  constructor(private http: HttpClient) { }

  registrar(usuario: any) {
    return this.http.post(`${this.apiUrl}/register`, usuario, { headers: this.headers });
  }

  login(usuario: any) {
    return this.http.post(`${this.apiUrl}/login`, usuario, { headers: this.headers });
  }

  // busca o token do usuario logado
  me(usuario: any) {
    return this.http.post(`${this.apiUrl}/me`, usuario, { headers: this.headers });
  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiUrl: string = 'https://projeto-node-step-git-main-fabios-projects-d2648344.vercel.app/api/auth';
  apiKey: string = "Step@2025";
  headers = new HttpHeaders({
    'x-api-key': this.apiKey,
  });

  constructor(private http: HttpClient) { }

  // essa função serve para cadastrar um novo usuário na API. O angular envia para ela.
  registrar(usuario: any) {
    return this.http.post(`${this.apiUrl}/register`, usuario, { headers: this.headers });
  }

  // essa função nesse serviço serve para logar um usuário na API.
  login(usuario: any) {
    return this.http.post(`${this.apiUrl}/login`, usuario, { headers: this.headers });
  }

  // Função responsável por salvar o token no localStorage.
  salvarToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Função responsável por buscar o token no localStorage.
  buscarToken() {
    return localStorage.getItem('token');
  }

  // Função responsável por remover o token do localStorage quando deslogar.
  logout() {
    localStorage.removeItem('token');
  }

  // Função responsável pela verificação do token do usuário (se ele tem token ou não).
  estaLogado(): boolean {
    if (this.buscarToken()) {
      return true;
    }

    return false;
  }

  // essa função nesse serviço serve para pegar os dados do usuário logado na API e verificar se ele está logado ou não.
  verificarUsuario(token: any) {
    const headerComToken = new HttpHeaders({
      'x-api-key': this.apiKey,
      'Authorization': `Bearer ${token}`
    })

    return this.http.get(`${this.apiUrl}/me`, { headers: headerComToken });
  }

}
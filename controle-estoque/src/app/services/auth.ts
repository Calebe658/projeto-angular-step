import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private usuario: any = null;
  private apiUrl = 'https://projeto-node-step-git-main-fabios-projects-d2648344.vercel.app/api/auth/register';

  constructor(private http: HttpClient) { }

  registrar(usuario: any) {
    return this.http.post(this.apiUrl, usuario);
  }

  login(nome: string, role: string) {
    this.usuario = { nome, role };
  }

  logout() {
    this.usuario = null;
  }

  estaLogado(): boolean {
    return !!this.usuario;
  }

  temRole(role: string): boolean {
    return this.usuario?.role === role;
  }
}

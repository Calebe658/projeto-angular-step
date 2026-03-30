import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router, private auth: Auth) { }

  login() {
    this.auth.login('usuario', 'admin');
    this.checkLogin();
  }

  checkLogin() {
    if (this.auth.estaLogado()) {
      this.router.navigate(['/painel-admin']);
    }
  }
}
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private auth: Auth, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        console.log("Usuário registrado com sucesso!", response);
        
        this.router.navigate(['/dashboard']);
      },
      error: (error: any) => {
        console.error("Erro ao fazer login:", error);
      }
    })
  }
}
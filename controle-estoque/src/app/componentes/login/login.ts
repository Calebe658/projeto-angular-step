import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  errorMessage: string | undefined;
  errorMessageInput = signal("");
  errorMessageInputPassword = signal("");
  hide = signal(true);

  constructor(private auth: Auth, private router: Router) {
    // Lógica para as mensagens do input

    merge(
      this.loginForm.get('email')!.statusChanges,
      this.loginForm.get('email')!.valueChanges,
      this.loginForm.get('password')!.statusChanges,
      this.loginForm.get('password')!.valueChanges,
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateErrorMessage();
        this.updateErrorMessagePassword();
      });
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  login() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        this.auth.salvarToken(response.token);
        this.router.navigate(['/dashboard']);
      },

      error: (respostaErro: any) => {
        this.errorMessage = respostaErro.error.error;
        alert(this.errorMessage);
      },
    });
  }

  // Mensagem de erro dos inputs

  updateErrorMessage() {
    if (this.loginForm.get('email')!.hasError('required')) {
      this.errorMessageInput.set('Você deve inserir um valor');

    } else if (this.loginForm.get('email')!.hasError('email')) {
      this.errorMessageInput.set('E-mail inválido');

    } else {
      this.errorMessageInput.set('');
    }
  }

  updateErrorMessagePassword() {
    if (this.loginForm.get('password')!.hasError('required')) {
      this.errorMessageInputPassword.set('Você deve inserir um valor');

    } else {
      this.errorMessageInputPassword.set('');
    }
  }

  // Input da Senha

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());

    event.stopPropagation();
  }
}
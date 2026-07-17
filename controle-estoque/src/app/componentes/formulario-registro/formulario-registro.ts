import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';

@Component({
  selector: 'app-formulario-registro',
  standalone: false,
  templateUrl: './formulario-registro.html',
  styleUrl: './formulario-registro.css',
})
export class FormularioRegistro {
  errorMessageInput = signal("");
  errorMessageInputPassword = signal("");
  hide = signal(true);

  constructor(private auth: Auth) {
    // Lógica para as mensagens do input

    merge(
      this.registroForm.get('email')!.statusChanges,
      this.registroForm.get('email')!.valueChanges,
      this.registroForm.get('password')!.statusChanges,
      this.registroForm.get('password')!.valueChanges,
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateErrorMessageEmail();
        this.updateErrorMessagePassword();
      });
  }

  registroForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
  });

  registrar() {

    const usuario = {
      nome: this.registroForm.value.nome,
      email: this.registroForm.value.email,
      senha: this.registroForm.value.password,
      role: this.registroForm.value.cargo,
    };

    this.auth.registrar(usuario).subscribe({
      next: (response) => {
        alert(`Usuário registrado com sucesso!`);
        console.log("Usuário registrado:", response);
      },
      error: (error) => {
        alert(`Erro ao registrar usuário:`);
        console.error(`Erro: ${error.error.erro}`);
      }
    })
  }

  // Mensagem de erro dos inputs

  updateErrorMessageEmail() {
    if (this.registroForm.get('email')!.hasError('required')) {
      this.errorMessageInput.set('Você deve inserir um valor');

    } else if (this.registroForm.get('email')!.hasError('email')) {
      this.errorMessageInput.set('E-mail inválido');

    } else {
      this.errorMessageInput.set('');
    }
  }

  updateErrorMessagePassword() {
    if (this.registroForm.get('password')!.hasError('required')) {
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

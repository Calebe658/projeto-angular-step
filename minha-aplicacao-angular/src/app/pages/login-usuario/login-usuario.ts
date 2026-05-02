import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-usuario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-usuario.html',
  styleUrl: './login-usuario.css',
})
export class LoginUsuario {
  formulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6),]),
  });

  enviarFormulario(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log(this.formulario.value);
  }

  get email() {
    return this.formulario.get('email');
  }

  get senha() {
    return this.formulario.get('senha');
  }
}
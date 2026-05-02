import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cadastro-usuario.html',
  styleUrl: './cadastro-usuario.css',
})
export class CadastroUsuario {
  mensagem = '';

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3),]),

    email: new FormControl('', [Validators.required, Validators.email,]),

    senha: new FormControl('', [Validators.required, Validators.minLength(6),]),
  });

  enviarFormulario(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log('Dados enviados:', this.formulario.value);
    
    this.mensagem = 'Cadastro realizado com sucesso!';
    this.formulario.reset();
  }

  get nome() {
    return this.formulario.get('nome');
  }

  get email() {
    return this.formulario.get('email');
  }

  get senha() {
    return this.formulario.get('senha');
  }
}
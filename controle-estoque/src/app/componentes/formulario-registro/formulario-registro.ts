import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-formulario-registro',
  standalone: false,
  templateUrl: './formulario-registro.html',
  styleUrl: './formulario-registro.css',
})
export class FormularioRegistro {
  constructor(private auth: Auth) { }

  registroForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
  });

  registrar() {
    this.auth.registrar(this.registroForm.value).subscribe({
      next: (response) => {
        console.log("Usuário registrado com sucesso!", response);
      },
      error: (error) => {
        console.error("Erro ao registrar usuário:", error);
      }
    })
  }
}

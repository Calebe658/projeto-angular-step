import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-form-usuarios',
  standalone: false,
  templateUrl: './form-usuarios.html',
  styleUrl: './form-usuarios.css',
})
export class FormUsuarios {
  registroForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
  });

  constructor(public authService: Auth) {}

  enviar() {
    this.authService.registrar(this.registroForm.value).subscribe((usuario) => {
      console.log(usuario);
    });
  }
}

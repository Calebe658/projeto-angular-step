import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aula3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aula3.html',
  styleUrl: './aula3.css',
})
export class Aula3 {
  nome = 'Fabio';
  botaoDesabilitado = false;
  perfil = 'admin';
  hoje = new Date();
  preco = 199.9;

  mostrarMensagem() {
    alert('Botão clicado com sucesso!');
  }

  habilitarDesabilitarBotao() {
    this.botaoDesabilitado = !this.botaoDesabilitado;
  }

}
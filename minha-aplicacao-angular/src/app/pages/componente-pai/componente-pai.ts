import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponenteFilho } from '../../components/componente-filho/componente-filho';

@Component({
  selector: 'app-componente-pai',
  imports: [CommonModule, RouterModule, ComponenteFilho],
  templateUrl: './componente-pai.html',
  styleUrl: './componente-pai.css'
})
export class ComponentePai implements OnInit, OnDestroy {
  nomeUsuario = 'Fabio';
  mensagemRecebida = '';

  ngOnInit(): void {
    console.log('Componente pai iniciado');
  }

  ngOnDestroy(): void {
    console.log('Componente pai destruído');
  }

  receberMensagem(mensagem: string): void {
    this.mensagemRecebida = mensagem;
  }

  alterarNome(): void {
    this.nomeUsuario = 'Novo nome enviado pelo pai';
  }
}
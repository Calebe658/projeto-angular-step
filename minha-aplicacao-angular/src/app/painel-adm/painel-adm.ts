import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../services/usuario';

@Component({
  selector: 'app-painel-adm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './painel-adm.html',
  styleUrl: './painel-adm.css'
})
export class PainelAdm implements OnInit {
  private usuarioService = inject(Usuario);

  usuarios: any[] = [];
  carregando = signal(true);

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe({
      next: (resposta) => {
        this.usuarios = resposta;
        this.carregando.set(false);
      },

      error: (erro) => {
        console.error('Erro ao buscar usuários:', erro);
        this.carregando.set(false);
      }
    });
  }
}
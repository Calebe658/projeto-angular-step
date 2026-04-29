import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Produto } from '../../services/produto';

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

@Component({
  selector: 'app-lista-produtos',
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})

export class ListaProdutos implements OnInit {

  produtos = signal<Product[]>([]);
  carregando = signal(true);

  constructor(private produtoService: Produto) { }

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe({
      next: (dados: Product[]) => {
        this.produtos.set(dados);
        this.carregando.set(false);
      },

      error: (erro: any) => {
        console.error(erro);
        this.carregando.set(false);
      },
    });
  }
}
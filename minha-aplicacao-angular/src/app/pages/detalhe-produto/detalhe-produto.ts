import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Produto, Product } from '../../services/produto';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhe-produto.html',
  styleUrl: './detalhe-produto.css',
})

export class DetalheProduto implements OnInit {
  produto = signal<Product | null>(null);
  carregando = signal(true);
  erro = signal(false);

  constructor(
    private route: ActivatedRoute,
    private produtoService: Produto,
  ) { }

  get produtoDetalhe(): Product | null {
    return this.produto();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      console.error('ID do produto não encontrado na rota');
      this.carregando.set(false);
      this.erro.set(true);
      return;
    }

    this.produtoService.buscarProdutoPorId(id).subscribe({
      next: (dados) => {
        this.produto.set(dados);
        this.carregando.set(false);
      },
      
      error: (erro) => {
        console.error('Erro ao buscar produto:', erro);
        this.carregando.set(false);
        this.erro.set(true);
      },
    });
  }
}
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ProdutosService } from '../../services/produtos-service';

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Dashboard implements OnInit {

  produtos = signal<Product[]>([]);
  carregando = signal(true);

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe({
      next: (dados: Product[]) => {
        this.produtos.set(dados);
        this.carregando.set(false);
      },
      
      error: (erro: any) => {
        console.error(erro);
        this.carregando.set(false);
      }
    })
  }
}

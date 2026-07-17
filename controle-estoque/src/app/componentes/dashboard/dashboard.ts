import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProdutosService } from '../../services/produtos-service';
import { Auth } from '../../services/auth';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Dashboard implements OnInit {

  produtos = signal<Product[]>([]);
  carregando = signal(true);
  usuarioAdmin = signal(false);

  constructor(private produtosService: ProdutosService, private auth: Auth, private router: Router) { }

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
    });

    this.verificarAdmin();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  verificarAdmin() {
    // Verifica se tem token primeiro
    if (!this.auth.estaLogado()) {
      this.usuarioAdmin.set(false);
      return;
    }

    const token = this.auth.buscarToken();

    this.auth.verificarUsuario(token).subscribe({
      next: (response: any) => {
        if (response.usuario.role === 'admin') {
          this.usuarioAdmin.set(true);

        } else {
          this.usuarioAdmin.set(false);
        }
      },

      error: () => {
        this.usuarioAdmin.set(false);
      }
    });
  }

  redirectPainelAdmin() {
    this.router.navigate(['/painel-admin']);
  }
}
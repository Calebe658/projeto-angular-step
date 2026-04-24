import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos-service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard implements OnInit {

  produtos: any;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getProdutos().subscribe((response) => {
      this.produtos = response;
      console.log(this.produtos);
    })
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-produto-filho',
  imports: [],
  templateUrl: './produto-filho.html',
  styleUrl: './produto-filho.css'
})
export class ProdutoFilho {
  @Input() produto: any;
  @Output() produtoSelecionado = new EventEmitter<string>();

  selecionarProduto(): void {
    this.produtoSelecionado.emit(this.produto.nome);
  }
}
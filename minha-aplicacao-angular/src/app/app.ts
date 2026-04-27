
import { Component, signal } from '@angular/core';
import { Exemplo } from './exemplo/exemplo';
import { PainelAdm } from './painel-adm/painel-adm';

@Component({
  selector: 'app-root',
  imports: [Exemplo, PainelAdm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('minha-aplicacao-angular');
}

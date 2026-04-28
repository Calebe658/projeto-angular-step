
import { Component, signal } from '@angular/core';
import { Aula2 } from './aula2/aula2';
import { PainelAdm } from './painel-adm/painel-adm';

@Component({
  selector: 'app-root',
  imports: [Aula2, PainelAdm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('minha-aplicacao-angular');
}

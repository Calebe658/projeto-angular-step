
import { Component, signal } from '@angular/core';
import { Exemplo } from './exemplo/exemplo';

@Component({
  selector: 'app-root',
  imports: [Exemplo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('minha-aplicacao-angular');
}

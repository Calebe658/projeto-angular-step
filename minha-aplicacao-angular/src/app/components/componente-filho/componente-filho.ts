import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  imports: [],
  templateUrl: './componente-filho.html',
  styleUrl: './componente-filho.css'
})
export class ComponenteFilho implements OnChanges {
  @Input() nome = '';
  @Output() mensagemEnviada = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Valor recebido pelo filho mudou:', changes);
  }

  enviarMensagem(): void {
    this.mensagemEnviada.emit('Mensagem enviada do filho para o pai');
  }
}
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  salario: number;
}

@Component({
  selector: 'app-painel-adm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './painel-adm.html',
  styleUrl: './painel-adm.css'
})
export class PainelAdm {

  usuarios: Usuario[] = [
    { id: 1, nome: "Marcos", email: "marcos@email.com", salario: 2400 },
    { id: 2, nome: "Marcia", email: "marcia@email.com", salario: 7021.7 },
    { id: 1, nome: "Flavio", email: "flavio@email.com", salario: 879.2 },
  ]
}
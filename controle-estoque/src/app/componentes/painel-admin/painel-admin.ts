import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-admin',
  standalone: false,
  templateUrl: './painel-admin.html',
  styleUrl: './painel-admin.css',
})
export class PainelAdmin {
  constructor(private auth: Auth, private router: Router) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  redirectDashboard() {
    this.router.navigate(['/dashboard']);
  }
}

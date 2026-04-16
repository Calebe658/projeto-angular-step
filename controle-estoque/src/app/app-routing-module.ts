import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './componentes/dashboard/dashboard';
import { PainelAdmin } from './componentes/painel-admin/painel-admin';
import { Estoque } from './componentes/estoque/estoque';
import { Login } from './componentes/login/login';
import { AuthGuard } from './guardioes/auth-guard';
import { perfilAcessoGuard } from './guardioes/perfil-acesso-guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'estoque', component: Estoque },
  { path: 'painel-admin', component: PainelAdmin, canActivate: [AuthGuard, perfilAcessoGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

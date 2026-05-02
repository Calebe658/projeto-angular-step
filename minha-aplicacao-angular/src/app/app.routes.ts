import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'produtos',
        pathMatch: 'full',
    },
    {
        path: 'produtos',
        loadComponent: () =>
            import('./pages/lista-produtos/lista-produtos').then((m) => m.ListaProdutos),
    },
    {
        path: 'produto/:id',
        loadComponent: () =>
            import('./pages/detalhe-produto/detalhe-produto').then((m) => m.DetalheProduto), canActivate: [roleGuard],
    },
    {
        path: 'painel-adm',
        loadComponent: () =>
            import('./painel-adm/painel-adm').then((m) => m.PainelAdm), canActivate: [authGuard, roleGuard],
    },
    {
        path: 'componente-pai',
        loadComponent: () =>
            import('./pages/componente-pai/componente-pai').then((m) => m.ComponentePai),
    },
    {
        path: 'produto-pai',
        loadComponent: () =>
            import('./pages/produto-pai/produto-pai').then((m) => m.ProdutoPai),
    },
    {
        path: '**',
        redirectTo: 'produtos',
    }
];
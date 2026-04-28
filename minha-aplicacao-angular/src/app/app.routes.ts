import { Routes } from '@angular/router';
// import { authGuard } from './guards/auth.guard';

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
            import('./pages/detalhe-produto/detalhe-produto').then((m) => m.DetalheProduto),
    },
    {
        path: 'painel-adm',
        loadComponent: () => import('./painel-adm/painel-adm').then((m) => m.PainelAdm),
    },
    {
        path: '**',
        redirectTo: 'produtos',
    }
];
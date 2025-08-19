import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component';
import { ListaAgendamentosComponent } from './pages/lista-agendamentos/lista-agendamentos.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component:LoginComponent},
    { path: 'agendamentos', component: AgendamentosComponent},
    {path: 'lista-agendamentos', component: ListaAgendamentosComponent},
    { path: 'dashboard',
        loadComponent: () => import('./components/dashboard.nav/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [authGuard],
        children: [
        { 
            path: '', redirectTo: 'app-dashboard_dados', pathMatch: 'full' },
        { 
            path: 'lista-agendamentos', 
            loadComponent: () => import('./pages/lista-agendamentos/lista-agendamentos.component').then(m => m.ListaAgendamentosComponent)
        },
        { 
            path: 'procedimentos', 
            loadComponent: () => import('./pages/procedimentos/procedimentos.component').then(m => m.ProcedimentosComponent)
        }, 
        {
            path: 'app-dashboard_dados',
                loadComponent: () => import('./pages/dashboard-dados/dashboard_dados.component').then(m => m.DashboardDadosComponent)
        },
        {
            path: 'configuracoes',
                loadComponent: () => import('./pages/configuracoes/horario-dia-funcionamento/configuracoesHorario.component').then(m => m.ConfiguracoesComponent)
        }
        ]
    },
    { path: '**', redirectTo: '' }
];

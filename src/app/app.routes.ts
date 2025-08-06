import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component';
import { ListaAgendamentosComponent } from './pages/lista-agendamentos/lista-agendamentos.component';
import { authGuard } from './core/guards/auth.guard';
import { ProcedimentosComponent } from './pages/procedimentos/procedimentos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component:LoginComponent},
    { path: 'agendamentos', component: AgendamentosComponent},
    {path: 'lista-agendamentos', component: ListaAgendamentosComponent},
    { path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [authGuard],
        children: [
        { path: '', redirectTo: 'lista-agendamentos', pathMatch: 'full' },
        { path: 'lista-agendamentos', 
            loadComponent: () => import('./pages/lista-agendamentos/lista-agendamentos.component').then(m => m.ListaAgendamentosComponent)
        },
        { path: 'procedimentos', 
            loadComponent: () => import('./pages/procedimentos/procedimentos.component').then(m => m.ProcedimentosComponent)
        } 
        ]
    },
    { path: '**', redirectTo: '' }
];

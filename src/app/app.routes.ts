import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component';
import { ListaAgendamentosComponent } from './pages/lista-agendamentos/lista-agendamentos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component:LoginComponent},
    { path: 'agendamentos', component: AgendamentosComponent},
    {path: 'lista-agendamentos', component: ListaAgendamentosComponent},
    { path: '**', redirectTo: '' }
];

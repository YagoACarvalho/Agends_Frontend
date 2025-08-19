import { Component, OnInit } from '@angular/core';
import { DashboardResponse } from '../../core/models/dashboardResponse';
import { DashboardService } from '../../core/services/dashboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard_dados',
  imports: [CommonModule],
  templateUrl: './dashboard_dados.component.html',
  styleUrls: ['./dashboard_dados.component.css']
})
export class DashboardDadosComponent implements OnInit{
  
  data?: DashboardResponse;
  loading = false;
  error: string | null = null;

  constructor (private dashboardService: DashboardService){}

  ngOnInit():void {
    this.carregarDados();
  }

  carregarDados(): void {
    console.log('Iniciando carregamento dos dados do dashboard');
    this.loading = true;
    this.error = null;

    this.dashboardService.getDashboardData().subscribe({
      next: (res) => {
        console.log('Dashboard data recebida: ', res );
        console.log('Próximos agendamentos: ', res.proximoAgendamentos);
        this.data = res;
        this.loading = false;
      },

      error: (err) => {
        console.error('Erro ao carregar dashboard: ', err);
        this.error = 'Erro ao carregar dados do dashboard';
        this.loading = false;
      }
    });
  }
}

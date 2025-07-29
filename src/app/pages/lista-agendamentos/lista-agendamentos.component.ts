import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../../core/services/agendamento.service';
import { Agendamento } from '../../core/models/agendamento.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-agendamentos',
  imports: [CommonModule],
  templateUrl: './lista-agendamentos.component.html',
  styleUrl: './lista-agendamentos.component.css'
})
export class ListaAgendamentosComponent implements OnInit {

  agendamentos: any[] = [];
  loading = true;
  error = '';

  constructor(private agendamentoService: AgendamentoService) {}


  ngOnInit(): void {
    console.log('Componente inicializado'); 
    this.agendamentoService.listarAgendamentos().subscribe({
      next:(data) => {
        console.log('Agendamentos recebidos:', data);
        this.agendamentos = data.content;
        this.loading = false;
      },

      error: (err) => {
        this.error = 'Erro ao carregar agendamentos';
        this.loading = false;
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../../core/services/agendamento.service';
import { Agendamento } from '../../core/models/agendamento.model';
import { CommonModule } from '@angular/common';
import { ProcedimentoService } from '../../core/services/procedimento.service';


@Component({
  selector: 'app-lista-agendamentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-agendamentos.component.html',
  styleUrls: ['./lista-agendamentos.component.css']
})
export class ListaAgendamentosComponent implements OnInit {

  agendamentos: Agendamento[] = [];
  loading = true;
  error = '';
  procedimentosMap = new Map<number, string>();

  constructor(private agendamentoService: AgendamentoService, private procedimentoService: ProcedimentoService) {}

  ngOnInit(): void {
    this.agendamentoService.listarProcedimento().subscribe({
      next: (response) => {
        const procedimentos = response.content;
        if(Array.isArray(procedimentos)) {
          procedimentos.forEach(p => this.procedimentosMap.set(p.id, p.servico));
          console.log('Procedimentos carregados no map:', this.procedimentosMap);
        } else {
          console.error('Procedimentos não veio como array:', procedimentos);
        }
        this.carregarAgendamentos();
      },
      error:() => {
        this.error = 'Erro ao carregar procedimentos';
        this.loading = false;
      }
    });
  }

  getNomeProcedimento(id: number | undefined): string {
    if(!id) return 'Indefinido';
    return this.procedimentosMap.get(Number(id)) ?? 'Desconhecido';
    
  }

  carregarAgendamentos() {
    this.loading = true;
    console.log('Componente inicializado'); 
    this.agendamentoService.listarAgendamentos().subscribe({
      next: (data) => {
      this.agendamentos = data.content || [];
      console.log('Agendamentos carregados:', this.agendamentos);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar agendamentos';
        this.loading = false;
      }
    });
  }

  marcarComoConcluido(id: number) {
    this.agendamentoService.atualizarAgendamento(id).subscribe((atualizado) => {
      const agendamento = this.agendamentos.find(a => a.id === id);
      if (agendamento && atualizado) {
        agendamento.status = atualizado.status;
      }

      this.carregarAgendamentos();
    });
  }

  deletarAgendamento(id: number) {
    if (!id) return;
    if (confirm('Tem certeza que deseja excluir este agendamento?')) {
      this.agendamentoService.excluirAgendamento(id).subscribe(() => {
        this.carregarAgendamentos();
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AgendamentoService } from '../../core/services/agendamento.service';
import { Agendamento } from '../../core/models/agendamento.model';
import { ProcedimentoResponse } from '../../core/models/procedimento.response';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import dayjs from 'dayjs';

@Component({
  selector: 'app-agendamentos',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, 
  MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatOptionModule, MatButtonModule, FormsModule],
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css']
})
export class AgendamentosComponent implements OnInit {
   
  agendamentoForm!: FormGroup;
  procedimentos: ProcedimentoResponse[] = [];

  

  constructor(
    private fb: FormBuilder, private agendamentoService: AgendamentoService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit executado');
    

    this.agendamentoForm = this.fb.group({
      nome: ['', Validators.required],
      procedimentoId: ['', Validators.required],
      dataHora: ['', Validators.required],
      hora: ['', Validators.required],
      numeroTelefone: ['', Validators.required]
    });

    this.carregarProcedimentos();
  }

  carregarProcedimentos(): void {
    this.agendamentoService.listarProcedimento().subscribe({
      next: (response) => {
        this.procedimentos = response.content;
        console.log('Procedimentos carregados:', this.procedimentos);
      },
      error: (err) => console.error('Erro ao carregar procedimentos:', err)
    });
  }

  onSubmit() {
    
    if(this.agendamentoForm.valid)  {
      const data = dayjs(this.agendamentoForm.value.dataHora);
      const horaValor: string = this.agendamentoForm.value.hora;
      if (!horaValor || !horaValor.includes(':')) {
        console.warn('Hora inválida');
        return;
      }
      const [hora, minuto] = horaValor.split(':');
      const dataHora = data.hour(Number(hora)).minute(Number(minuto)).second(0).format('YYYY-MM-DDTHH:mm:ss');

      
      const dadosParaEnviar: Agendamento = {
        nome: this.agendamentoForm.value.nome,
        procedimentoId: this.agendamentoForm.value.procedimentoId,
        numeroTelefone: this.agendamentoForm.value.numeroTelefone,
        dataHora: dataHora
      };

      console.log('Enviado dados:', dadosParaEnviar);

      this.agendamentoService.criarAgendamento(dadosParaEnviar).subscribe({
        next: (res) => {
          console.log('Agendamento criado com sucesso!', res);
          alert('Agendamento criado com sucesso');
        },
        error: (err) => {
          console.error('Erro ao enviar agendamento:', err);
        }
      });

    } else {
      console.warn('Formulário inválido');
    }
  }
}

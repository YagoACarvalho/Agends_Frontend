import { Component, OnInit } from '@angular/core';
import { ProcedimentoResponse } from '../../core/models/procedimento.response';
import { ProcedimentoService } from '../../core/services/procedimento.service';
import { ProcedimentoRequest } from '../../core/models/procedimento.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-procedimentos',
  imports: [FormsModule, CommonModule],
  templateUrl: './procedimentos.component.html',
  styleUrl: './procedimentos.component.css'
})
export class ProcedimentosComponent implements OnInit{
  
  

  procedimentos: ProcedimentoResponse[] = [];
  procedimento: ProcedimentoRequest = {
    servico: '', preco: 0, duracao: 0,
  };

  constructor(private procedimentoService: ProcedimentoService) {}

  ngOnInit(): void {
    this.carregarProcedimento();
  }


  carregarProcedimento() {
    this.procedimentoService.listarProcedimento().subscribe(res => this.procedimentos =  res.content);
  }

  salvarProcedimento() {
    if(this.procedimento.id) {
      this.procedimentoService.atualizarProcedimento(this.procedimento.id, this.procedimento).subscribe(() =>{
        this.carregarProcedimento();
        this.procedimento = {servico: '', preco: 0, duracao: 0}
      });
    } else {
      this.procedimentoService.criarProcedimento(this.procedimento).subscribe(() => {
        this.carregarProcedimento();
        this.procedimento = {servico: '', preco: 0, duracao: 0}
      });
    }
  }

  editarProcedimento(p: ProcedimentoRequest) {
    this.procedimento = {...p};
  }

  removerProcedimento(id: number) {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.procedimentoService.exluirProcedimento(id).subscribe(() => {
        this.carregarProcedimento();
      });
    }
  }

}

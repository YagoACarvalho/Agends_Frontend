import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from '../models/agendamento.model';
import { AgendamentoResponse } from '../models/agendamento-response.model';
import { ProcedimentoService } from './procedimento.service';


@Injectable({providedIn: 'root'})
export class AgendamentoService {

    private agendamentosURL = 'http://localhost:8080/agendamentos'; 
    private marcarComoConcluidoURL = "http://localhost:8080/agendamentos/resolved";


    constructor(private http: HttpClient, private procedimentoService: ProcedimentoService) {}

    criarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
        return this.http.post<Agendamento>(this.agendamentosURL, agendamento);
    }

    listarAgendamentos(): Observable<AgendamentoResponse> {
        return this.http.get<AgendamentoResponse>(this.agendamentosURL);
    }

    excluirAgendamento(id: number): Observable<void> {
        return this.http.delete<void>(`${this.agendamentosURL}/${id}`)
    }

    listarProcedimento(): Observable<any> {
        return this.procedimentoService.listarProcedimento()
    }

    atualizarAgendamento(id: number): Observable<Agendamento> {
        return this.http.put<Agendamento>(`${this.marcarComoConcluidoURL}/${id}`, {});
    }
}
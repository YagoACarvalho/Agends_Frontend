import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from '../models/agendamento.model';
import { Procedimento } from '../models/procedimento.model';


@Injectable({providedIn: 'root'})
export class AgendamentoService {

    private agendamentosURL = 'http://localhost:8080/agendamentos';
    private procedimentoURL = 'http://localhost:8080/procedimentos';


    constructor(private http: HttpClient) {}

    criarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
        return this.http.post<Agendamento>(this.agendamentosURL, agendamento);
    }

    listarAgendamento(): Observable<Agendamento[]> {
        return this.http.get<Agendamento[]>(this.agendamentosURL);
    }

    excluirAgendamento(id: number): Observable<void> {
        return this.http.delete<void>(`${this.agendamentosURL}/${id}`)
    }

    criarProcedimento(procedimento: Procedimento): Observable<Procedimento> {
        return this.http.post<Procedimento>(this.procedimentoURL, procedimento);
    }

    listarProcedimento(): Observable<any> {
        return this.http.get<any>(this.procedimentoURL)
    }
}
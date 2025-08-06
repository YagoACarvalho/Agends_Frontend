import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcedimentoResponse } from '../models/procedimento.response';
import { PaginatedResponse, ProcedimentoRequest } from '../models/procedimento.model';


@Injectable({
    providedIn:'root'
})
export class ProcedimentoService {
    private apiURL = 'http://localhost:8080/procedimentos';

    constructor(private http: HttpClient) {}


    listarProcedimento(): Observable<PaginatedResponse<ProcedimentoResponse>> {
        return this.http.get<PaginatedResponse<ProcedimentoResponse>>(this.apiURL);
    }

    criarProcedimento(procedimento: ProcedimentoRequest): Observable<ProcedimentoRequest> {
        return this.http.post<ProcedimentoRequest>(this.apiURL, procedimento);
    }

    exluirProcedimento(id: number): Observable<any> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }
    
    atualizarProcedimento(id:number, procedimento: ProcedimentoRequest): Observable<ProcedimentoRequest> {
        return this.http.put<ProcedimentoRequest>(`${this.apiURL}/${id}`, procedimento);
    }

}
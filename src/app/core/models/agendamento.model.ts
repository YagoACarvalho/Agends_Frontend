import { ProcedimentoResponse } from "./procedimento.response";

export interface Agendamento {
    id?: number,
    nome: string;
    numeroTelefone: string;
    procedimentoId?: ProcedimentoResponse;
    dataHora: string;
    status?: string;
  }
  
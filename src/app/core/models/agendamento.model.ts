import { Procedimento } from "./procedimento.model";

export interface Agendamento {
    id?: number,
    nome: string;
    numeroTelefone: string;
    procedimentoId?: Procedimento;
    dataHora: string;
    status?: string;
  }
  
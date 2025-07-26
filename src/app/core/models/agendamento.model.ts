import { Procedimento } from "./procedimento.model";

export interface Agendamento {
    nome: string;
    numeroTelefone: string;
    procedimentosId: number;
    dataHora: string;
  }
  
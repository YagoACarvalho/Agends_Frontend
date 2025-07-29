import { Agendamento } from './agendamento.model';

export interface AgendamentoResponse {
  content: Agendamento[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
}
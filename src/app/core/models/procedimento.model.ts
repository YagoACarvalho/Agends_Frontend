export interface ProcedimentoRequest {
    id?: number;
    servico: string;
    preco?: number;
    duracao: number;
}


export interface PaginatedResponse<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
    first: boolean;
    last: boolean;
  }
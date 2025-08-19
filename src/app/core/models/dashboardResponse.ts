export interface DashboardResponse {
    agendamentosHoje: number;
    agendamentosMes: number;
    totalFaturadoMes: number;
    proximoAgendamentos: {
        id: number;
        nome: string;
        procedimento: {
            id: number;
            servico: string;
            preco: number;
            duracao: number;
        };
        dataHora: string;
        status: string;
    }[];
}
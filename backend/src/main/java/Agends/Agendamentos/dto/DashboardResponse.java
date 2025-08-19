package Agends.Agendamentos.dto;

import Agends.Agendamentos.Entity.Agendamento;

import java.util.List;
import java.math.BigDecimal;

public record DashboardResponse(

  long agendamentosHoje,
  long agendamentosMes,
  BigDecimal totalFaturadoMes,
  List<Agendamento> proximoAgendamentos

) {
}

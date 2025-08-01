package Agends.Agendamentos.dto;

import Agends.Agendamentos.Entity.Agendamento;
import Agends.Agendamentos.Entity.Procedimento;

import java.time.LocalDateTime;

public record AgendamentoResponse(
  Long id,
  String nome,
  String numeroTelefone,
  Procedimento procedimentoId,
  LocalDateTime dataHora) {

  public AgendamentoResponse(Agendamento agendamento) {
    this(agendamento.getId(), agendamento.getNome(), agendamento.getNumeroTelefone(), agendamento.getProcedimento(), agendamento.getDataHora());
  }

}

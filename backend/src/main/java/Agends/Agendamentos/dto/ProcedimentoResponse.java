package Agends.Agendamentos.dto;

import Agends.Agendamentos.Entity.Procedimento;

public record ProcedimentoResponse(

  Long id,
  String servico,
  Double preco

) {

  public ProcedimentoResponse(Procedimento procedimento) {
    this(procedimento.getId(), procedimento.getServico(), procedimento.getPreco());
  }

}

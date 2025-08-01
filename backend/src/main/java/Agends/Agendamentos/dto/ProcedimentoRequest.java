package Agends.Agendamentos.dto;


import Agends.Agendamentos.Entity.Procedimento;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProcedimentoRequest(

  @NotBlank
  String servico,
  @NotNull
  Double preco,
  @NotNull
  Integer duracao

) {

  public ProcedimentoRequest(Procedimento procedimento) {
    this(procedimento.getServico(), procedimento.getPreco(), procedimento.getDuracao());
  }

}

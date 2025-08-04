package Agends.Agendamentos.Entity;

public enum StatusAgendamento {

  NAO_ATENDIDO("Não atentido"),
  ATENDIDO("Resolvido");


  private final String descricao;


  StatusAgendamento(String s) {
    this.descricao = s;
  }


}

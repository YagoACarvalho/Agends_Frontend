package Agends.Agendamentos.dto;

import java.time.LocalTime;

public record ConfiguracaoHorarioFuncionamentoDTO(

  LocalTime horarioAbertura,
  LocalTime horarioFechamento

) {
}

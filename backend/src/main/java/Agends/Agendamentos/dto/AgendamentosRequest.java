package Agends.Agendamentos.dto;

import Agends.Agendamentos.Entity.Procedimento;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record AgendamentosRequest(

  @NotBlank
  String nome,
  @NotBlank
  String numeroTelefone,
  @NotNull
  Long procedimentoId,
  @NotNull
  @Future(message = "A data do agendamento deve estar no futuro")
  LocalDateTime dataHora

) {
}

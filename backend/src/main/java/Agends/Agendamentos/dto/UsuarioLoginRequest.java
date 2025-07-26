package Agends.Agendamentos.dto;

import jakarta.validation.constraints.NotBlank;

public record UsuarioLoginRequest(


  String username,

  String senha

) {
}

package Agends.Agendamentos.dto;

import Agends.Agendamentos.Entity.Usuario;

public record UsuarioResponse(
  Long id,
  String username
) {
  public UsuarioResponse(Usuario usuario) {
    this(usuario.getId(), usuario.getUsername());
  }
}

package Agends.Agendamentos.service;

import Agends.Agendamentos.Entity.Usuario;
import Agends.Agendamentos.dto.UsuarioLoginRequest;
import Agends.Agendamentos.dto.UsuarioResponse;
import Agends.Agendamentos.infra.validadorDeErros.ValidacaoException;
import Agends.Agendamentos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

  @Autowired
  private UsuarioRepository usuarioRepository;


  @Autowired
  private PasswordEncoder passwordEncoder;


  public UsuarioResponse Cadastrar(UsuarioLoginRequest request) {
    if(usuarioRepository.count() > 0) {
      throw new ValidacaoException("Já existe um administrador cadastrado.");
    }

    Usuario usuario = new Usuario();
    usuario.setUsername(request.username());
    usuario.setSenha(passwordEncoder.encode(request.senha()));

    var novoUsuario = usuarioRepository.save(usuario);
    return new UsuarioResponse(novoUsuario);
  }
}

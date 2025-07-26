package Agends.Agendamentos.service;


import Agends.Agendamentos.Entity.Usuario;
import Agends.Agendamentos.infra.validadorDeErros.ValidacaoException;
import Agends.Agendamentos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AutenticacaoService implements UserDetailsService {

  @Autowired
  private UsuarioRepository usuarioRepository;

  @Override
  public UserDetails loadUserByUsername(String username) {
    Usuario usuario = usuarioRepository.findByUsername(username)
      .orElseThrow(() -> new ValidacaoException("Usuário não encontrado"));

    return usuario;
  }
}

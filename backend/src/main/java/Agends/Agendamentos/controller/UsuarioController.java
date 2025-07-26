package Agends.Agendamentos.controller;

import Agends.Agendamentos.Entity.Usuario;
import Agends.Agendamentos.dto.UsuarioLoginRequest;
import Agends.Agendamentos.repository.UsuarioRepository;
import Agends.Agendamentos.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

  @Autowired
  private UsuarioRepository usuarioRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private UsuarioService usuarioService;


  @PostMapping
  @Transactional
  public ResponseEntity cadastrarUsuario(@RequestBody @Valid UsuarioLoginRequest loginRequest, UriComponentsBuilder uriComponentsBuilder) {
   var usuario = usuarioService.Cadastrar(loginRequest);

    var uri = uriComponentsBuilder.path("/usuarios/{id}").buildAndExpand(usuario.id()).toUri();
    return ResponseEntity.created(uri).body(usuario);
  }


}

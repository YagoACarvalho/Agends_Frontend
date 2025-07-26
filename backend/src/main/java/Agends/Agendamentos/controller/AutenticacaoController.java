package Agends.Agendamentos.controller;

import Agends.Agendamentos.Entity.Usuario;
import Agends.Agendamentos.dto.DadosTokenJWT;
import Agends.Agendamentos.dto.UsuarioLoginRequest;
import Agends.Agendamentos.service.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth/login")
public class AutenticacaoController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private TokenService tokenService;

  @PostMapping
  public ResponseEntity<?> efetuarLogin(@RequestBody @Valid UsuarioLoginRequest loginRequest) {
    var authenticationToken = new UsernamePasswordAuthenticationToken(loginRequest.username(), loginRequest.senha());
    var authentication = authenticationManager.authenticate(authenticationToken);

    var usuario = (Usuario) authentication.getPrincipal();
    var tokenJWT = tokenService.gerarToken(usuario);

    return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));
  }
}

package Agends.Agendamentos.infra.security;

import Agends.Agendamentos.Entity.Usuario;
import Agends.Agendamentos.infra.validadorDeErros.ValidacaoException;
import Agends.Agendamentos.repository.UsuarioRepository;
import Agends.Agendamentos.service.TokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {

  @Autowired
  private TokenService tokenService;

  @Autowired
  private UsuarioRepository usuarioRepository;



  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

    var tokenJWT = recuperarToken(request);

    if (tokenJWT != null) {
      try {
        var subject = tokenService.getSubject(tokenJWT);
        var usuario = usuarioRepository.findByUsername(subject)
          .orElseThrow(() -> new ValidacaoException("Usuário não encontrado"));

        var authentication = new UsernamePasswordAuthenticationToken(usuario, null, usuario.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        System.out.println("Usuário autenticado: " + usuario.getUsername());
        System.out.println("Authorities: " + usuario.getAuthorities());
      } catch (Exception e) {
        System.out.println("Erro ao validar token: " + e.getMessage());
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("Token inválido");
        return;
      }
    }
    filterChain.doFilter(request, response);

}

  private String recuperarToken(HttpServletRequest request) {
    var authorizationHeader = request.getHeader("Authorization");
    if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
      return  authorizationHeader.replace("Bearer ", "");
    }

    return null;
  }
}

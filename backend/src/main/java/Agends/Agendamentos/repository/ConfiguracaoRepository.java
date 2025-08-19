package Agends.Agendamentos.repository;

import Agends.Agendamentos.Entity.Configuracao;
import Agends.Agendamentos.Entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConfiguracaoRepository extends JpaRepository<Configuracao, Long> {


List<Configuracao> findByUsuario(Usuario usuario);


}

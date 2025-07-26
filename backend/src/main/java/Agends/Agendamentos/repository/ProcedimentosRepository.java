package Agends.Agendamentos.repository;

import Agends.Agendamentos.Entity.Procedimento;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProcedimentosRepository extends JpaRepository<Procedimento, Long> {
  boolean existsByServico(@NotBlank String nome);
}

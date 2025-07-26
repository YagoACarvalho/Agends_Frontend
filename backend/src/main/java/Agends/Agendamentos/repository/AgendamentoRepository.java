package Agends.Agendamentos.repository;


import Agends.Agendamentos.Entity.Agendamento;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
  boolean existsByDataHora(@NotNull LocalDateTime horario);
}

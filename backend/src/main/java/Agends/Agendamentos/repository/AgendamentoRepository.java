package Agends.Agendamentos.repository;


import Agends.Agendamentos.Entity.Agendamento;
import Agends.Agendamentos.Entity.StatusAgendamento;
import Agends.Agendamentos.dto.ProximoAgendamento;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.math.BigDecimal;
import java.time.LocalDateTime;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
  boolean existsByDataHora(@NotNull LocalDateTime horario);

  long countByDataHoraBetween(LocalDateTime inicio, LocalDateTime fim);

  @Query("SELECT SUM(a.procedimento.preco) FROM Agendamento a WHERE YEAR(a.dataHora) = :ano AND MONTH(a.dataHora) = :mes")
  BigDecimal sumPrecoByMes(int ano, int mes);

  List<Agendamento> findTop5ByOrderByDataHoraAsc();

  List<Agendamento> findByStatusNotAndDataHoraGreaterThanEqual(
    StatusAgendamento status,
    LocalDateTime dataHora
  );
}

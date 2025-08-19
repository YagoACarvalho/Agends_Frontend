package Agends.Agendamentos.service;


import Agends.Agendamentos.Entity.StatusAgendamento;
import Agends.Agendamentos.dto.DashboardResponse;
import Agends.Agendamentos.dto.ProximoAgendamento;
import Agends.Agendamentos.repository.AgendamentoRepository;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.stream.Collectors;

@Service
public class DashboardService {

  private final AgendamentoRepository agendamentoRepository;

  public DashboardService(AgendamentoRepository agendamentoRepository) {
    this.agendamentoRepository = agendamentoRepository;
  }

  public DashboardResponse mostrarDashboard() {
    long hoje = agendamentoRepository.countByDataHoraBetween(
      LocalDate.now().atStartOfDay(),
      LocalDate.now().plusDays(1).atStartOfDay()
    );

    long mes = agendamentoRepository.countByDataHoraBetween(
      LocalDate.now().withDayOfMonth(1).atStartOfDay(),
      LocalDate.now().plusMonths(1).withDayOfMonth(1).atStartOfDay()
    );

    BigDecimal faturamentoMes = agendamentoRepository.sumPrecoByMes(
      LocalDate.now().getYear(),
      LocalDate.now().getMonthValue()
    );

    var proximos =  agendamentoRepository.findByStatusNotAndDataHoraGreaterThanEqual(
      StatusAgendamento.ATENDIDO,
      LocalDate.now().atStartOfDay());
    System.out.println("Próximos agendamentos: " + proximos);
    return new DashboardResponse(hoje, mes, faturamentoMes, proximos);

  }

}

package Agends.Agendamentos.controller;

import Agends.Agendamentos.dto.DashboardResponse;
import Agends.Agendamentos.repository.AgendamentoRepository;
import Agends.Agendamentos.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

  @Autowired
  private DashboardService dashboardService;



  @GetMapping
  private ResponseEntity<DashboardResponse> dadosDashboard() {
    var dadosDashboard = dashboardService.mostrarDashboard();
    return ResponseEntity.ok(dadosDashboard);
  }

}

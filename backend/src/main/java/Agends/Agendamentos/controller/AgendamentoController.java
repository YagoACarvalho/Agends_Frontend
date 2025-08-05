package Agends.Agendamentos.controller;

import Agends.Agendamentos.dto.AgendamentoResponse;
import Agends.Agendamentos.dto.AgendamentosRequest;
import Agends.Agendamentos.infra.validadorDeErros.ValidacaoException;
import Agends.Agendamentos.repository.AgendamentoRepository;
import Agends.Agendamentos.service.AgendamentoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/agendamentos")
public class AgendamentoController {

  @Autowired
  private AgendamentoRepository agendamentoRepository;

  @Autowired
  private AgendamentoService agendamentoService;

  @PostMapping
  @Transactional
  public ResponseEntity agendar(@RequestBody @Valid AgendamentosRequest dadosAgendamentos){
    var dto = agendamentoService.agendar(dadosAgendamentos);
    return ResponseEntity.ok(dto);

  }

  @GetMapping
  public ResponseEntity<Page<AgendamentoResponse>> ListarAgendamentos(Pageable pageable){
    var dto = agendamentoService.listar(pageable);
    return ResponseEntity.ok(dto);
  }


  @DeleteMapping("/{id}")
  @Transactional
  public ResponseEntity DeletarAgendamento(@PathVariable Long id) {
    agendamentoService.deletarAgendamento(id);
    return ResponseEntity.ok("Agendamento deletado com sucesso!");
  }

  @PutMapping("/resolved/{id}")
  @Transactional
  public ResponseEntity<AgendamentoResponse> marcarComoAtendido(@PathVariable Long id){
   AgendamentoResponse atualizado = agendamentoService.marcarComoAtendido(id);
    return ResponseEntity.noContent().build();
  }

}

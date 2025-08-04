package Agends.Agendamentos.service;

import Agends.Agendamentos.Entity.Agendamento;
import Agends.Agendamentos.Entity.StatusAgendamento;
import Agends.Agendamentos.dto.AgendamentosRequest;
import Agends.Agendamentos.dto.AgendamentoResponse;
import Agends.Agendamentos.infra.validadorDeErros.ValidacaoException;
import Agends.Agendamentos.repository.AgendamentoRepository;
import Agends.Agendamentos.repository.ProcedimentosRepository;
import Agends.Agendamentos.validacao.ValidadorAgendamento;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class AgendamentoService {

  @Autowired
  private AgendamentoRepository agendamentoRepository;

  @Autowired
  private ProcedimentosRepository procedimentosRepository;

  @Autowired
  private List<ValidadorAgendamento> validadores;

  public AgendamentoResponse agendar(AgendamentosRequest dadosAgendamentos) {

    validadores.forEach(v -> v.validar(dadosAgendamentos));

    Agendamento agendamento = novoAgendamento(dadosAgendamentos);

    agendamentoRepository.save(agendamento);

    return new AgendamentoResponse(agendamento);
  }


  public Page<AgendamentoResponse> listar(Pageable pageable) {
    var page = agendamentoRepository.findAll(pageable);
    return page.map(AgendamentoResponse::new);
  }

  public void deletarAgendamento(long id) {
    var agendamento = agendamentoRepository.findById(id)
      .orElseThrow(() -> new ValidacaoException("Agendamento não encontrado!"));
    agendamentoRepository.delete(agendamento);
  }


  public void marcarComoAtendido(Long id) {
    var agendamento = procurarAgendamentoId(id);
    agendamento.atender();
  }


  //Métodos auxiliares


  private Agendamento novoAgendamento(AgendamentosRequest dto) {
    var procedimento = procedimentosRepository.findById(dto.procedimentoId())
      .orElseThrow(() -> new ValidacaoException("Procedimento não é válido!"));

    var agendamento = new Agendamento(
      null,
      dto.nome(),
      dto.numeroTelefone(),
      procedimento,
      dto.dataHora()
    );
    return agendamento;
  }


  private Agendamento procurarAgendamentoId(Long id) {
    Agendamento agendamento = agendamentoRepository.findById(id)
      .orElseThrow(() -> new ValidacaoException("Agendamento não encontrado"));
    return agendamento;
  }
}

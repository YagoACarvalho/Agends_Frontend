package Agends.Agendamentos.validacao;

import Agends.Agendamentos.dto.AgendamentosRequest;
import Agends.Agendamentos.infra.validadorDeErros.ValidacaoException;
import Agends.Agendamentos.repository.AgendamentoRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ValidadorHorarioDuplicado implements ValidadorAgendamento{

  @Autowired
  private AgendamentoRepository agendamentoRepository;

  @Override
  public void validar(AgendamentosRequest dados) {
    if(agendamentoRepository.existsByDataHora(dados.dataHora())){
      throw new ValidacaoException("Horário já preenchido");
    }
  }
}

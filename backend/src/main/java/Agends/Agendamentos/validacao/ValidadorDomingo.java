package Agends.Agendamentos.validacao;

import Agends.Agendamentos.dto.AgendamentosRequest;
import Agends.Agendamentos.infra.validadorDeErros.ValidacaoException;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;

@Component
public class ValidadorDomingo implements ValidadorAgendamento {

  @Override
  public void validar(AgendamentosRequest dados) {
    if(dados.dataHora().getDayOfWeek() == DayOfWeek.SUNDAY) {
      throw new ValidacaoException("Não é possivel agendar aos domingos");
    }
  }
}

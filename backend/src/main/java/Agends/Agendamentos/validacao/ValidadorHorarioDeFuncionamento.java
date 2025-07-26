package Agends.Agendamentos.validacao;

import Agends.Agendamentos.dto.AgendamentosRequest;
import Agends.Agendamentos.infra.validadorDeErros.ValidacaoException;
import org.springframework.stereotype.Component;

@Component
public class ValidadorHorarioDeFuncionamento implements ValidadorAgendamento {


  @Override
  public void validar(AgendamentosRequest dados) {
    var dataAgendada = dados.dataHora();

    var abertura = dataAgendada.getHour() < 7;
    var fechamento = dataAgendada.getHour() > 18;
    if (abertura || fechamento) {
      throw  new ValidacaoException("Agendamento fora do horário de funcionamento, tente novamente!");
    }

  }
}

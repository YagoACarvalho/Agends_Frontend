package Agends.Agendamentos.infra.validadorDeErros;

public class ValidacaoException extends RuntimeException {
  public ValidacaoException(String mensagem) {
    super(mensagem);
  }
}

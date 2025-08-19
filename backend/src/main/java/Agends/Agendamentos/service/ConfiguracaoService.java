package Agends.Agendamentos.service;

import Agends.Agendamentos.Entity.Configuracao;
import Agends.Agendamentos.dto.ConfiguracaoHorarioFuncionamentoDTO;
import Agends.Agendamentos.infra.validadorDeErros.ValidacaoException;
import Agends.Agendamentos.repository.ConfiguracaoRepository;
import Agends.Agendamentos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConfiguracaoService {

  @Autowired
  private UsuarioRepository usuarioRepository;
  @Autowired
  private ConfiguracaoRepository configuracaoRepository;


  public ConfiguracaoHorarioFuncionamentoDTO salvarConfiguracao(Long usuarioId, ConfiguracaoHorarioFuncionamentoDTO dto) {
    var usuario = usuarioRepository.findById(usuarioId)
      .orElseThrow(() -> new ValidacaoException("Usuário não encontrado"));

    Configuracao config = usuario.getConfiguracao();

    if (config == null) {
      config = new Configuracao();
      config.setHorarioAbertura(dto.horarioAbertura());
      config.setHorarioFechamento(dto.horarioFechamento());
      usuario.setConfiguracao(config);
    } else {
      config.setHorarioAbertura(dto.horarioAbertura());
      config.setHorarioFechamento(dto.horarioFechamento());
    }

    usuarioRepository.save(usuario);

    return dto;

  }
}

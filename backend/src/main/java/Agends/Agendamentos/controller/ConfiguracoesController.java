package Agends.Agendamentos.controller;

import Agends.Agendamentos.dto.ConfiguracaoHorarioFuncionamentoDTO;
import Agends.Agendamentos.service.ConfiguracaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/configuracoes")
public class ConfiguracoesController {

  @Autowired
  private ConfiguracaoService configuracaoService;


  @GetMapping("/{usuarioId}")
  public ConfiguracaoHorarioFuncionamentoDTO salvarConfiguracao(@PathVariable Long UsuarioId, @RequestBody ConfiguracaoHorarioFuncionamentoDTO dto) {
    return configuracaoService.salvarConfiguracao(UsuarioId, dto);
  }



}

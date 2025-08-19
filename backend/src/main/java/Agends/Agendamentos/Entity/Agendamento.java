package Agends.Agendamentos.Entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Agendamentos")
public class Agendamento{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nome;

  private String numeroTelefone;

  @ManyToOne
  @JoinColumn(name = "procedimento_id", nullable = false)
  private Procedimento procedimento;


  private LocalDateTime dataHora;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private StatusAgendamento status = StatusAgendamento.NAO_ATENDIDO;


  public Agendamento(Long id, String nome, String numeroTelefone, Procedimento procedimento, LocalDateTime dataHora) {
    this.nome = nome;
    this.numeroTelefone = numeroTelefone;
    this.procedimento = procedimento;
    this.dataHora = dataHora;
  }


  public void atender() {
    this.status = StatusAgendamento.ATENDIDO;
  }
}

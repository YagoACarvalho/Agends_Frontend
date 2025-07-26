package Agends.Agendamentos.Entity;


import jakarta.persistence.*;
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

}

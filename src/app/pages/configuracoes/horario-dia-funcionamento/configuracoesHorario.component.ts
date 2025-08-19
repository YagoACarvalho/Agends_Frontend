import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-configuracoes',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './configuracoesHorario.component.html',
  styleUrls: ['./configuracoesHorario.component.css']
})
export class ConfiguracoesComponent {
  form!: FormGroup;

  nomesDias = ['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO', 'DOMINGO'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      diasSemana: this.fb.array(
      this.nomesDias.map(dia => this.fb.group({
        nome: [dia],
        ativo: [true],
        abertura: ['8:00'],
        fechamento : ['18:00']
      }))
    )
  });
}


  get diasSemana(): FormArray{
    return this.form.get('diasSemana') as FormArray;
  }

  salvar() {
    console.log(this.form.value);
  }

}

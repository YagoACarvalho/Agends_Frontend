import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../../core/enums/card.enum';


@Component({
  selector: 'app-configs-menu',
  imports: [],
  templateUrl: './configs-menu.component.html',
  styleUrls: ['./configs-menu.component.css']
})
export class ConfigsMenuComponent {
  cardEnum = Card;


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}


  navigateTo(card: Card): void {
    switch (card) { 
      case Card.HORA_FUNCIONAMENTO:
        this.router.navigate(['/dashboard/config-horario-dia']);
        console.log('pagina de horario chamada.')
        break;
      case Card.CORES_TEMAS:
        this.router.navigate(['']);
        break;
      //TODO: outros navigates dos cards restantes.
    }
  }

  private checkScheduleConfig(): boolean {
    return true;
  }

  private checkThemeConfig(): boolean {
    return true;
  }

}

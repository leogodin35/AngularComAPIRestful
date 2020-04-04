import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from '../../services/lembrete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lembrete } from '../../interfaces/lembrete';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent  {
  public lembrete: Lembrete;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.getLembrete(this.activatedRouter.snapshot.params.id);
  }

  getLembrete(id: number) {
    this.lembreteService.getLembrete(id)
      .subscribe(
        (lembrete: Lembrete) => { this.lembrete = lembrete; }, // Callback success
        () => { this.errorMsgComponent.setError('Falha ao buscar lembrete'); } // Callback error
      );
  }

  atualizaLembrete(lembrete: Lembrete) {
    this.lembreteService.atualizaLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); }, // Callback success
        () => { this.errorMsgComponent.setError('Falha ao atualzar lembrete.'); } // Callback error
      );
  }

}

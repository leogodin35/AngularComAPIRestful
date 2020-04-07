import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-exemplo',
  templateUrl: './tooltip-exemplo.component.html',
  styleUrls: ['./tooltip-exemplo.component.css']
})
export class TooltipExemploComponent {
  public visible = false;
  public mouse = { x: 0, y: 0 };

  alteraPosicaoDaTooltip(x: number, y: number) {
    this.mouse = { x, y };
  }

  exibeTooltip() {
    this.visible = true;
  }

  escondeTooltip() {
    this.visible = false;
  }

}

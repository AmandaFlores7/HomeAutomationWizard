import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-info-desplegable',
  templateUrl: './mini-info-desplegable.component.html',
  styleUrls: ['./mini-info-desplegable.component.scss']
})
export class MiniInfoDesplegableComponent {
  @Input() titulo: any;
  @Input() textos: any;
  @Input() tipo: any;
}

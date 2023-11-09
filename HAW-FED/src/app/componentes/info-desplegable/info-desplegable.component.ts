import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-desplegable',
  templateUrl: './info-desplegable.component.html',
  styleUrls: ['./info-desplegable.component.scss']
})
export class InfoDesplegableComponent {
  @Input() informacion: any;
}

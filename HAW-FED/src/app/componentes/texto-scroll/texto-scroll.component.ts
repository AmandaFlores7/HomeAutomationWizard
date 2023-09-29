import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto-scroll',
  templateUrl: './texto-scroll.component.html',
  styleUrls: ['./texto-scroll.component.scss']
})
export class TextoScrollComponent {
  @Input() 
  texto: any;
}

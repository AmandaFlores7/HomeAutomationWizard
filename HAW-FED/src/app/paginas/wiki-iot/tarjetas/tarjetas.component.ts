import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent {
  @Input() tarjetas: any;

  ngOnInit() {
    console.log(this.tarjetas);
  }
}

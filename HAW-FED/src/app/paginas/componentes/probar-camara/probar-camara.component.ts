import { Component } from '@angular/core';
import { CONSTANTES } from 'src/app/app.component';

@Component({
  selector: 'app-probar-camara',
  templateUrl: './probar-camara.component.html',
  styleUrls: ['./probar-camara.component.scss']
})
export class ProbarCamaraComponent {
  urlCamera = CONSTANTES.url_camera;
}

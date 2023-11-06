import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';
import { JsonService } from 'src/app/servicios/json.service';

@Component({
  selector: 'app-objetivos-aprendizaje',
  templateUrl: './objetivos-aprendizaje.component.html',
  styleUrls: ['./objetivos-aprendizaje.component.scss']
})
export class ObjetivosAprendizajeComponent {
  objetivos: any;
  titulo2: any;
  infoPagina: any;

  constructor(private router: Router, private jsonService:JsonService) {
    
  }

  ngOnInit() {
    this.jsonService.obtenerContenidoWiki(this.router.url).subscribe((data) => {
      this.infoPagina = data;
      this.titulo2 = this.infoPagina['titulo2'];
      this.objetivos = this.infoPagina['objetivos']
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';
import { JsonService } from 'src/app/servicios/json.service';

@Component({
  selector: 'app-contenido-wiki',
  templateUrl: './contenido-wiki.component.html',
  styleUrls: ['./contenido-wiki.component.scss']
})
export class ContenidoWikiComponent {
  titulo2: any;
  infoPagina: any;
  texto: any;
  imagenes: any;
  caracteristicas:any;

  constructor(private router: Router, private jsonService:JsonService) {
    
  }
  
  ngOnInit() {
    this.jsonService.obtenerContenidoWiki(this.router.url).subscribe((data) => {
      this.infoPagina = data;
      this.titulo2 = this.infoPagina['titulo2'];
      this.texto = this.infoPagina['texto'];
      this.imagenes = this.infoPagina['imagenes'];
      this.caracteristicas = this.infoPagina['caracteristicas']? this.infoPagina['caracteristicas'] : null;
    });
  }

  buscarTitulo(linkActual: string) {
    let info = JSON.parse(JSON.stringify(rutas))[linkActual];
    if (info) {
      return info;
    }
    return null;
  }
}

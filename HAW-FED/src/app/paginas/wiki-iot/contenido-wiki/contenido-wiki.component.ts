import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/servicios/json.service';

@Component({
  selector: 'app-contenido-wiki',
  templateUrl: './contenido-wiki.component.html',
  styleUrls: ['./contenido-wiki.component.scss']
})
export class ContenidoWikiComponent {
  titulo: any;
  texto: [] = [];
  imagenes: any;
  caracteristicas:any;
  definiciones: [] = [];
  infoExtra: any;
  subInfo: any;

  constructor(private router: Router, private jsonService:JsonService) {
    
  }
  
  ngOnInit() {
    this.jsonService.obtenerContenidoWiki2(this.router.url).subscribe((data:{}) => {
      let datita = JSON.parse(JSON.stringify(data));
      console.log(datita);
      let info = datita.info;
      this.titulo = info.titulo;
      this.texto = info.texto;
      this.caracteristicas = info.caracteristicas;
      this.definiciones = info.definiciones;
      this.infoExtra = datita.infoExtra;
      this.subInfo = datita.subInfo;
      console.log(this.subInfo);
    });
  }
}

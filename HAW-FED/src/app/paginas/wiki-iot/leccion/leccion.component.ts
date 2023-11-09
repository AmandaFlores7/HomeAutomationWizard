import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/servicios/json.service';

@Component({
  selector: 'app-leccion',
  templateUrl: './leccion.component.html',
  styleUrls: ['./leccion.component.scss']
})
export class LeccionComponent {
  introduccion: any;
  datita: any;

  infoDesplegable: any;

  leccion: string = '';

  constructor(private router: Router, private jsonService: JsonService) {}

  ngOnInit() {
    this.jsonService.obtenerContenidoWiki2(this.router.url).subscribe((data) => {
      this.datita = data;
      this.introduccion = this.datita['info']['introduccion'];
      this.leccion = this.router.url;
      console.log(this.datita);

      if (this.datita['tabs']) {
        this.infoDesplegable = this.datita['tabs'];
        console.log(this.infoDesplegable);
      }
    });
}
}

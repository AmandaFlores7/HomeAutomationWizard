import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.scss']
})
export class MenuInfoComponent {
  @Input() opciones : any;
  informacion: any;
  extra: any;

  constructor(private router: Router) {
    if (this.router?.url && this.buscarRuta(this.router.url)?.titulo != null) {
      let infoPagina = this.buscarRuta(this.router.url);
      this.informacion = infoPagina.informacion;
      this.extra = infoPagina.extra;
    }
  }

  ngOnInit(): void {
    this.extra.link = 'none';
    this.setSelectedItem(this.extra);
  }

  cssClassByIndex(index:number) {
    return 'collapse'+index;
   }

  buscarRuta(linkActual: string) {
    let info = JSON.parse(JSON.stringify(rutas))[linkActual];
    if (info) {
      return info;
    }
    return null;
  }
  selectedItem = null;

  setSelectedItem(item:any) {
    this.selectedItem = item;
  }
}

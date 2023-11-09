import { Component, Input } from '@angular/core';

const data = {
  titulo: 'Funcionamiento y Pasos dentro de la conexion de MQTT',
  informacion: [
    {
      titulo: 'Conexión Inicial',
      subtitulo: 'Paso 1',
      texto:
        'Un dispositivo (llamado cliente) se conecta a un servidor MQTT.',
    },
    {
      titulo: 'Solicitud de Suscripción',
      subtitulo: 'Paso 2',
      texto:
        'El cliente le dice al servidor a qué temas o canales quiere suscribirse para recibir información.',
    },
    {
      titulo: 'Publicación de Mensajes',
      subtitulo: 'Paso 3',
      texto:
        'Otros dispositivos (llamados editores) envían mensajes al servidor, etiquetados con un tema específico.',
    },
    {
      titulo: 'Entrega de Mensajes',
      subtitulo: 'Paso 4',
      texto:
        'El servidor reenvía los mensajes a los clientes suscritos a esos temas.',
    },
    {
      titulo: 'Desconexión',
      subtitulo: 'Paso 5',
      texto:
        'Cuando un cliente ya no necesita comunicarse, se desconecta del servidor.',
    },
  ],
  extra: {
    texto:
      'Estos pasos permiten que los dispositivos se comuniquen y se mantengan actualizados sobre la información que les interesa.',
  },
};

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.scss'],
})
export class MenuInfoComponent {
  @Input() opciones: any;
  informacion: any;
  extra: any;
  selectedItem = null;

  constructor() {
    this.informacion = data.informacion;
    this.extra = data.extra;
  }

  ngOnInit(): void {
    this.extra.link = 'none';
    this.setSelectedItem(this.extra);
  }

  cssClassByIndex(index: number) {
    return 'collapse' + index;
  }

  setSelectedItem(item: any) {
    this.selectedItem = item;
  }
}

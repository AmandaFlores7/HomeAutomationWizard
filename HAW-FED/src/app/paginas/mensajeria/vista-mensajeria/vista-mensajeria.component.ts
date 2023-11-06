import { Component } from '@angular/core';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-vista-mensajeria',
  templateUrl: './vista-mensajeria.component.html',
  styleUrls: ['./vista-mensajeria.component.scss']
})
export class VistaMensajeriaComponent {
  public webSocketIP = 'ws://127.0.0.1:8000/mensajeria/';
  public myWebSocket: any;

  public topicoSeleccionado: string = '';
  public mensaje: string = '';

  topicoSeleccionadoChat: string = '';

  public messages: string[] = [];
  hayPeticion: boolean = false;

  constructor(private mqttService: MqttserviceService) {
    
  }

  enviarPeticion() {
    let nombre = String(JSON.parse(localStorage.getItem('usuario') || '').nombre);
    this.mqttService.enviarMensaje(this.mensaje, this.topicoSeleccionado, nombre).subscribe(
      (resultado) => {
        console.log(resultado);
        console.log((JSON.parse(JSON.stringify(resultado))).tipo);
        if ((JSON.parse(JSON.stringify(resultado))).tipo === 'Creado') {
          this.mensaje = '';
          this.topicoSeleccionado = '';
          this.hayPeticion = false;
        }
      },
      (error) => {
        console.error('Error al realizar la solicitud:', error);
        // Manejar errores aquí si es necesario
      }
    )
  }

  verificarMensaje() {
    if (this.topicoSeleccionado && this.mensaje && this.mensaje != '') {
      this.hayPeticion = true;
    }
    else {
      this.hayPeticion = false;
    }
  }

  ngOnInit() {
  }

  cambiarTopico() {
    console.log(this.topicoSeleccionadoChat);
    let WSIP = this.webSocketIP + this.topicoSeleccionadoChat;
    this.myWebSocket = webSocket(WSIP);

    this.myWebSocket.subscribe(
      (msg: any) => {
        console.log("data: ", msg);
        this.messages.push(msg);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }
}

import { Component } from '@angular/core';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';
import { webSocket } from 'rxjs/webSocket';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { WebSocketChat } from 'src/app/models/web-socket-chat';
@Component({
  selector: 'app-vista-mensajeria',
  templateUrl: './vista-mensajeria.component.html',
  styleUrls: ['./vista-mensajeria.component.scss']
})

export class VistaMensajeriaComponent {
  

  public topicoSeleccionado: string = '';
  public mensaje: string = '';
  hayPeticion: boolean = false;
  public topicoSeleccionadoChat: string = '';

  constructor(public _mensajeria:MensajeriaService) {

  }

  enviarMensaje() {
    let nombre = String(JSON.parse(localStorage.getItem('usuario') || '').nombre);
    let chatMsg = new WebSocketChat(nombre,this.mensaje,this.topicoSeleccionado);
    this._mensajeria.openWebSocketConnection(this.topicoSeleccionado, chatMsg);
  }

  verificarMensaje() {
    if (this.topicoSeleccionado && this.mensaje && this.mensaje != '') {
      this.hayPeticion = true;
    }
    else {
      this.hayPeticion = false;
    }
  }

  // cambiarTopico(){
  //   this._mensajeria.openWebSocketConnection(this.topicoSeleccionado);
  // }
}

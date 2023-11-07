import { Component } from '@angular/core';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-vista-mensajeria',
  templateUrl: './vista-mensajeria.component.html',
  styleUrls: ['./vista-mensajeria.component.scss']
})
export class VistaMensajeriaComponent {
  public webSocketIP = 'ws://192.168.0.105:8000/mensajeria/';
  
  public topicoSeleccionado: string = '';
  public mensaje: string = '';

  topicoSeleccionadoChat: string = '';
  
  public messages:any = [];
  hayPeticion: boolean = false;

  constructor(private mqttService: MqttserviceService) {
    
  }

  enviarMensaje() {
    
    let nombre = String(JSON.parse(localStorage.getItem('usuario') || '').nombre);
    let WSIP = this.webSocketIP + this.topicoSeleccionado
    const myWebSocket = new WebSocket(WSIP)
    
    myWebSocket.onmessage = (event) => {
      this.messages.push(JSON.parse(event.data))
    }

    let data= {
      "mensaje": this.mensaje,
      "topico": this.topicoSeleccionado,
      "nombre": nombre
    }

    myWebSocket.onopen = event => {
      myWebSocket.send(JSON.stringify(data))
      data = {
        "mensaje": "",
        "topico": "",
        "nombre": ""
      }
    }
   
  }

  listenToMessages(){
    
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
    this.listenToMessages()
  }

  cambiarTopico() {
    console.log(this.topicoSeleccionadoChat);
    let WSIP = this.webSocketIP + this.topicoSeleccionadoChat;
    const myWebSocket = new WebSocket(WSIP)

    // this.myWebSocket.subscribe(
    //   (msg: any) => {
    //     console.log("data: ", msg);
    //     this.messages.push(msg);
    //   },
    //   (err: any) => console.log(err),
    //   () => console.log('complete')
    // );
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';
declare let window: any;

@Component({
  selector: 'app-testeo',
  templateUrl: './testeo.component.html',
  styleUrls: ['./testeo.component.scss'],
})
export class TesteoComponent {
  messages: string[] = [
    'Testeando conexión...',
    'Creando suscripción al tópico: /test-result...',
    'Publicando mensaje de testeo al tópico: /test-mqtt...',
    'Verificando recepción de mensaje...',
    'Finalizando...',
  ];
  currentMessageIndex: number = 0;
  progressValue = 0;
  test_result: any;
  isLoading: boolean = true;
  mostrarBoton: boolean = false;

  displayStyle = 'none';
  hayMensaje: boolean = false;
  attrMensaje: any;
  route: any;

  constructor(private _mqttService: MqttserviceService, route: Router) {}

  ngOnInit() {
    this.initLoading();
  }

  initLoading() {
    this.currentMessageIndex = 0;
    this.progressValue = 0;
    this.isLoading = true;
    this.test_result = null;

    this._mqttService.testMqttProtocol().subscribe(async (res) => {
      setTimeout(() => {
        this.test_result = res;
      }, 1500);
    });
    this.startLoading(this.test_result);
  }

  startLoading(test_result: any) {
    const loadingTime = 5000; // 5 segundos

    const interval = setInterval(() => {
      this.progressValue += 1200 / (loadingTime / 100);

      if (this.progressValue >= 100) {
        clearInterval(interval);

        if (this.test_result) {
          if (this.test_result['test-result'] === 'ok') {
            this.displayStyle = 'success';
            this.hayMensaje = true;
            this.attrMensaje = {
              titulo: 'Éxito',
              parrafo:
                'La conexión con el broker MQTT se ha establecido correctamente.',
              link: '/aplicacion'
            };
          } else {
            this.displayStyle = 'success';
            this.hayMensaje = true;
            this.attrMensaje = {
              titulo: 'Éxito',
              parrafo:
                'La conexión con el broker MQTT se ha establecido correctamente.',
              link: '/aplicacion'
            };
          }
        } else {
          this.displayStyle = 'success';
            this.hayMensaje = true;
            this.attrMensaje = {
              titulo: 'Éxito',
              parrafo:
                'La conexión con el broker MQTT se ha establecido correctamente.',
              link: '/aplicacion'
            };
        }
      } else {
        // Incrementa el índice del mensaje actual
        this.currentMessageIndex++;
        // Verifica si hemos llegado al final de los mensajes y reinicia si es necesario
        if (this.currentMessageIndex >= this.messages.length) {
          this.currentMessageIndex = 0;
        }
      }
    }, 2000);
  }
  setSelectedMessage(msg: any, displayStyle: string) {
    this.hayMensaje = msg;
    this.progressValue = 0;
    if (displayStyle === 'error') {
      this.mostrarBoton = true;
    }
  }
}

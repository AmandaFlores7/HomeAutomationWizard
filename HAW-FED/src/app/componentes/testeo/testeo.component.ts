import { Component } from '@angular/core';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';
declare let window:any;

@Component({
  selector: 'app-testeo',
  templateUrl: './testeo.component.html',
  styleUrls: ['./testeo.component.scss']
})
export class TesteoComponent {
  messages: string[] = ['Testeando conexión...', 'Creando suscripción al tópico: /test-result...', 'Publicando mensaje de testeo al tópico: /test-mqtt...', 'Verificando recepción de mensaje...', 'Finalizando...']
  currentMessageIndex: number = 0;
  progressValue = 0;
  test_result: any;
  isLoading: boolean = true;
  displaySuccessMessage: boolean = false;
  displayErrorMessage: boolean = false;
  displayStyle = "none";
  errorModal:any;
  successModal:any;

  constructor(private _mqttService: MqttserviceService) { }

  ngOnInit() {

    this.errorModal = new window.bootstrap.Modal(
      document.getElementById('errorMessageModal')
    )

    this.successModal = new window.bootstrap.Modal(
      document.getElementById('successMessageModal')
    )

    this._mqttService.testMqttProtocol().subscribe(async res => {
      setTimeout(() => {
        this.test_result = res
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
          if (this.test_result['test-result'] === "ok") {
            this.displaySuccessMessage = true;
            this.openSuccessModal();
          } else {
            this.displayErrorMessage = true;
            this.openErrorModal()
          }
        } else {
          this.displayErrorMessage = true;
          this.openErrorModal()
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

  openErrorModal() {
    this.errorModal.show();
  }

  openSuccessModal(){
    this.successModal.show();
  }
 
}

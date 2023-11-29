import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { delay, retryWhen } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { CONSTANTES } from 'src/app/app.component';
import { DataDevService } from 'src/app/servicios/data-dev.service';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';

interface result {
  topic: string,
  measure_time: string,
  value: string
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  public measure_times: string[] = [];
  public values: string[] = [];
  public chart: any;

  public webSocketIP = CONSTANTES.ws_url+'/';

  public valorActual: string = '';

  public sensorType: string = '';
  public chartTitle: string = '';
  public myWebSocket: any;
  public tipo: any;

  dataDevBol = false;

  textoPeticion = '';

  constructor(private s_mqtt: MqttserviceService, private dataDev: DataDevService, private route: ActivatedRoute) {
    
    this.route.data.subscribe(data => {
      this.sensorType = data['tipoSensor'];
      this.chartTitle = data['tituloGrafico'];
    });
    this.dataDev.devModeBool$.subscribe(value => {
      this.dataDevBol = value;
    });
    this.webSocketIP = this.webSocketIP + this.sensorType;
    this.myWebSocket = webSocket(this.webSocketIP);

    this.s_mqtt.obtenerDatosSensor(this.sensorType).subscribe((data: any) => {
      this.initializeChart();
      for (let i = 0; i < data.last_hour_data.length; i++) {
        this.measure_times.push(data.last_hour_data[i]['time(timestamp)']);
        this.values.push(data.last_hour_data[i]['value']);
        if (i == data.last_hour_data.length - 1) {
          this.valorActual = data.last_hour_data[i]['value'];
        }
      }
      this.updateChart();
    });

    this.crearPeticion();
  }

  crearPeticion() {
    this.textoPeticion = "suscribirse a 'broker' al topico '" + this.sensorType + "'";
  }

  ngOnInit(): void {
    if (!window.WebSocket) {
      console.log('WebSocket not supported.')
    } else {
      this.myWebSocket.pipe(
        retryWhen(errors => errors.pipe(delay(3000)))
      ).subscribe({
        error: (err: any) => { console.log(err) },
        next: (val: any) => {
          const r = val as result;
          this.measure_times.push(r.measure_time);
          this.values.push(r.value);
          this.valorActual = r.value;
          if (this.measure_times.length > 20) {
            this.measure_times.shift();
            this.values.shift();
          }
          this.updateChart();
        },
      });
    }
  }

  ngOnDestroy() {
    this.dataDev.setDevModeBool(false);
    if (this.myWebSocket) {
      this.myWebSocket.unsubscribe();
    }
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private initializeChart() {
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: this.measure_times,
        datasets: [
          {
            label: "",
            data: this.values,
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointStyle: false
          },
        ],
      },
      options: {
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'bottom',
            align: 'start',
            labels: {
              usePointStyle: true,
              font: {
                size: 16
              }
            }
          }
        }
      }
    });
  }

  private updateChart() {
    // Actualiza el gráfico con los nuevos datos
    this.chart.data.labels = this.measure_times;
    this.chart.data.datasets[0].data = this.values;
    this.chart.data.datasets[0].label = "Valor Actual: " + this.valorActual;
    this.chart.update();
  }

}

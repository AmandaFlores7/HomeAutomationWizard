import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { webSocket } from 'rxjs/webSocket';
import { rutas } from 'src/app/constantes/rutas';

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

  public sensorType: string = '';
  public websocketURL: string = '';
  public chartTitle: string = '';

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    if (this.router?.url && this.buscarRuta(this.router.url)?.titulo != null) {
      let infoPagina = this.buscarRuta(this.router.url);
      if (infoPagina?.datosSensor) {
        this.sensorType = infoPagina.datosSensor.tipoSensor ? infoPagina.datosSensor.tipoSensor : null;
        this.websocketURL = infoPagina.datosSensor.websocketURL ? infoPagina.datosSensor.websocketURL : null;
        this.chartTitle = infoPagina.datosSensor.tituloGrafico ? infoPagina.datosSensor.tituloGrafico : null;
        this.initializeChart(); // Inicializa el gráfico
        let myWebSocket = webSocket(this.websocketURL)

        if (!window.WebSocket) {
          console.log('WebSocket not supported.')
        } else {

          myWebSocket.subscribe({
            error: (err) => { console.log(err) },
            next: (val) => {
              const r = val as result;
              this.measure_times.push(r.measure_time);
              this.values.push(r.value);
              this.updateChart();
            },
          });
        }
      }

    }
  }

  initializeChart() {
    this.chart = new Chart(this.chartTitle, {
      type: 'line',
      data: {
        labels: this.measure_times,
        datasets: [
          {
            label: 'Sensor de ' + this.sensorType,
            data: this.values,
            borderColor: 'blue',
            fill: false,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  updateChart() {
    // Actualiza el gráfico con los nuevos datos
    this.chart.data.labels = this.measure_times;
    this.chart.data.datasets[0].data = this.values;
    this.chart.update();
  }

  buscarRuta(linkActual: string) {
    let info = JSON.parse(JSON.stringify(rutas))[linkActual];
    if (info) {
      return info;
    }
    return null;
  }

}

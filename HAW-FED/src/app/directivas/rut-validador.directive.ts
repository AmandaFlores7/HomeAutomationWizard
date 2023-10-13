import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appRutValidador]'
})
export class RutValidadorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const inputElement = this.el.nativeElement;
    console.log('inputElement.value: ', inputElement.value);
    let rut = inputElement.value.replace(/[.-]/g, ''); // Elimina puntos y guiones del RUT
    if (rut.length > 1) {
      rut = rut.slice(0, -1) + '-' + rut.slice(-1); // Agrega guion antes del dígito verificador
    }
    inputElement.value = rut;
    if (this.validarRut(rut) && rut.length > 6) {
      inputElement.classList.remove('is-invalid');
      inputElement.classList.add('is-valid');
    } else {
      inputElement.classList.remove('is-valid');
      inputElement.classList.add('is-invalid');
    }
  }

  formatRut(rut: string): string {
    return rut;
  }

  validarRut(rut: string): boolean {
    rut = rut.replace(/\./g, "").replace(/-/g, "");

    // Extraer el dígito verificador y el cuerpo del RUT
    const cuerpoRut = rut.slice(0, -1);
    const digitoVerificador = rut.slice(-1).toUpperCase();

    // Calcular el dígito verificador esperado
    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpoRut.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpoRut[i]) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const digitoEsperado = (11 - (suma % 11)).toString();

    // Comparar el dígito verificador calculado con el ingresado
    if (digitoEsperado === "10") {
        if (digitoVerificador === "K") {
            return true;
        }
    } else if (digitoEsperado === "11") {
        if (digitoVerificador === "0") {
            return true;
        }
    } else if (digitoEsperado === digitoVerificador) {
        return true;
    }

    return false;
  }
}

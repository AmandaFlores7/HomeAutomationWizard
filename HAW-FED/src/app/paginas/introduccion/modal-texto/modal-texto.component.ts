import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-texto',
  templateUrl: './modal-texto.component.html',
  styleUrls: ['./modal-texto.component.scss']
})
export class ModalTextoComponent implements OnInit {
  @Input() data: any;
  @Input() displayStyle: string = '';
  @Output() closeModal = new EventEmitter();

  mostrarFooter = false;
  link = '';
  hayLink = false;

  onCloseModal(): void {
    this.closeModal.emit();
  }

  ngOnInit() {
    var elemento = document.getElementById('contenidoModal');
    if (elemento) {
      if (this.displayStyle === 'success') {
        elemento.classList.add('text-white');
        elemento.classList.add('bg-success');
        this.mostrarFooter = true;
      } else if (this.displayStyle === 'error') {
        elemento.classList.add('text-white');
        elemento.classList.add('bg-danger');
        this.mostrarFooter = true; // TODO: cambiar a false
      }
    }
    if (this.data?.link) {
      if (this.data.link != 'none') {
        this.mostrarFooter = true;
        this.link = this.data.link;
        this.hayLink = true;
      } else {
        this.mostrarFooter = true;
        this.hayLink = false;
      }
      
    } else {
      this.mostrarFooter = true; // TODO: cambiar a false
    }
  }


}
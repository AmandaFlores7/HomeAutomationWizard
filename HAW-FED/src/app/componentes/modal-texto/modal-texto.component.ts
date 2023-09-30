import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-texto',
  templateUrl: './modal-texto.component.html',
  styleUrls: ['./modal-texto.component.scss']
})
export class ModalTextoComponent {
  @Input() data: any;
  @Output() closeModal = new EventEmitter();

  onCloseModal(): void {
    this.closeModal.emit();
  }
}

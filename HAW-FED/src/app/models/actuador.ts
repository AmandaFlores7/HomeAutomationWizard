export class Actuador {
  nombre: string;
  id: string;
  estado: boolean;

  constructor(nombre: string, id: string) {
    this.nombre = nombre;
    this.id = id;
    this.estado = false;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getId(): string {
    return this.id;
  }

  public getEstado(): boolean {
    return this.estado;
  }

  public setEstado(estado: boolean) {
    this.estado = estado;
  }
}

export class Led extends Actuador {
  opciones: {} = {
    true: {
      ON: 'Encender',
    },
    false: {
      OFF: 'Apagar',
    }
  };
  stream: boolean = true;

  constructor(nombre: string, id: string) {
    super(nombre, id);
  }

  public getOpciones(): {} {
    return this.opciones;
  }
}

export class Puerta extends Actuador {
  opciones: {} = {
    true: {
      OPEN: 'Abrir',
    },
    false: {
      CLOSE: 'Cerrar',
    }
  };

  constructor(nombre: string, id: string) {
    super(nombre, id);
  }

  public getOpciones(): {} {
    return this.opciones;
  }
}

export class WebSocketChat {

    nombre:string;
    mensaje:string;
    topico:string;
    
    constructor(nombre:string,message:string,topico:string){
        this.nombre = nombre;
        this.mensaje = message;
        this.topico = topico
    }
}

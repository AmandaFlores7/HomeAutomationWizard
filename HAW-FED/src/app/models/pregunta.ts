export interface Pregunta {
    id: number;
    tipo: string;
    pregunta: string;
    respuesta: string;
    alternativas: string[];
    respondida: boolean;
    seleccion?: string;
}
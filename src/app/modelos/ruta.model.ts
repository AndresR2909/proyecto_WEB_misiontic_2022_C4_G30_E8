import { AeropuertoModel } from "./aeropuerto.model";

export class RutaModel{
    id?: String;
    origen?: AeropuertoModel;
    destino?: AeropuertoModel;
    tiempo_estimado?: String;
  }
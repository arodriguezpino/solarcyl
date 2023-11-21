export interface TotalConsumption {
  province: Provincia;
  total: number;
}

export interface MonthlyFee {
  datasetid: Datasetid;
  recordid: string;
  fields: Fields;
  record_timestamp: Date;
}

export enum Datasetid {
  ConsumoDeElectricidadMensualEnCastillaYLeon = "consumo-de-electricidad-mensual-en-castilla-y-leon",
}

export interface Fields {
  provincia: Provincia;
  tipo: Tipo;
  consumo_kwh: number;
  suministrador: Suministrador;
  mes: string;
  codigo_ine: string;
}

export enum Provincia {
  Burgos = "Burgos",
  León = "León",
  Palencia = "Palencia",
  Salamanca = "Salamanca",
  Segovia = "Segovia",
  Soria = "Soria",
  Valladolid = "Valladolid",
  Zamora = "Zamora",
  Ávila = "Ávila",
}

export enum Suministrador {
  EndesaDistribución = "Endesa Distribución",
  IDe = "I-DE",
  Ufd = "UFD",
  Viesgo = "Viesgo",
}

export enum Tipo {
  Industrial = "Industrial",
  Residencial = "Residencial",
  Servicios = "Servicios",
}

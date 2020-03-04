import { Injectable } from '@angular/core';
import { Cuota } from '../models/cuota';

@Injectable({
  providedIn: 'root'
})
export class CuotasService {
  private cuotas: Cuota[] = [{idCuota: 6, meses: 'seis', isDisable: false},
                             {idCuota: 12, meses: 'doce', isDisable: false},
                             {idCuota: 18, meses: 'diesocho', isDisable: false},
                             {idCuota: 24, meses: 'veintecuatro', isDisable: true},
                             {idCuota: 36, meses: 'treintaseis', isDisable: true},
                             {idCuota: 48, meses: 'cuatrocho', isDisable: true},
                            ];
  constructor() { }

  public getCuotas = (): Promise<Cuota[]> => {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, reject) => {
      resolve(this.cuotas);
      reject('No se pudo cargar las cuotas');
    });
  }
}
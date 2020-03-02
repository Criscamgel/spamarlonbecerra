import { Injectable } from '@angular/core';
import { CuotasService } from './cuotas.service';
import { Cuota } from '../models/cuota';
import { RespuestaCalculadora } from '../models/respuesta-calculadora';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public cuotas: Cuota[] = [];
  public dataCuotas: RespuestaCalculadora[] = [];
  public clickCuota: RespuestaCalculadora;


  constructor(public cuotaService: CuotasService) {
    this.getCuotas();
    this.clickCuota = new RespuestaCalculadora();
  }

  private getCuotas() {
    this.cuotaService.getCuotas()
    .then(cuotasRadio => {
      this.cuotas = cuotasRadio;
    }).catch(console.error);
  }

  public calculateCuota(monto: number, tasa?: number): Promise<RespuestaCalculadora[]> {
    return new Promise((resolve, reject) => {
      const data: RespuestaCalculadora[] = [];
      // tslint:disable-next-line: forin
      for (const cuota of this.cuotas) {
       data.push(this.data(monto, cuota.idCuota, tasa));
      }
      this.dataCuotas = data;
      resolve(data);
    });
  }
  public data(monto: number, cuota: number, tasa: number = 0.24) {
    const data: RespuestaCalculadora = new RespuestaCalculadora();
    data.tasaEfectivaAnual = tasa;
    data.montoSolicitado = monto;
    data.numeroCuotas = cuota;
    data.nominalMesVencido = Math.pow((1 + tasa), (1 / 12)) - 1;
    data.valorTotalSeguro = (1200 / 1000000) * monto;
    data.valorTotalSeguro = Math.round(data.valorTotalSeguro * cuota);
    // calculo intereses
    const interes = monto * data.nominalMesVencido;
    let vlrPartdos = Math.pow((1 + data.nominalMesVencido), - cuota);
    vlrPartdos = 1 - vlrPartdos;
    data.valorCuotaSinSeguro = Math.round( interes / vlrPartdos);
    // // calculo seguro
    const interesSeguro = data.valorTotalSeguro * data.nominalMesVencido;
    let vlrPartdosSeg = Math.pow((1 + data.nominalMesVencido), - cuota);
    vlrPartdosSeg = 1 - vlrPartdosSeg;
    data.seguroCuota = Math.round(interesSeguro / vlrPartdosSeg);
    data.valorCuotaConSeguro = data.seguroCuota + data.valorTotalSeguro;
    data.costoMensualSeguro = data.valorTotalSeguro / cuota;
    return data;
  }

  public getDataCuotas(): any {
    return new Observable(observer => observer.next(this.dataCuotas));
  }
}

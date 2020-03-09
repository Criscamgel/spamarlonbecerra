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
    data.nominalMesVencido = (Math.pow((1 + data.tasaEfectivaAnual), (1 / 12)) - 1);
    data.nominalMesVencido = Number(data.nominalMesVencido);
    /* .toFixed(6).slice(0, -1) */
    data.valorTotalSeguro = ((1200 / 1000000) * data.montoSolicitado) * (cuota);
    data.montoTotalFinanciamiento = data.valorTotalSeguro + data.montoSolicitado;
    // Valor Futuro
    const valorFuturo: any = data.montoTotalFinanciamiento * Math.pow(1 + data.nominalMesVencido, data.periodoGracia);
    // NVM
    const interes = valorFuturo * data.nominalMesVencido;
    const vlrPartdos = 1 - Math.pow((1 + data.nominalMesVencido), (- (cuota - data.periodoGracia)));
    data.valorCuotaSinSeguro = Math.round(interes / vlrPartdos);
    // calculo seguro
    const interesSeguro = data.valorTotalSeguro * data.nominalMesVencido;
    const vlrPartdosSeg = 1 - Math.pow((1 + data.nominalMesVencido), - (cuota - data.periodoGracia));
    data.costoMensualSeguro = Math.round(interesSeguro / vlrPartdosSeg);
    data.valorCuotaConSeguro = data.valorCuotaSinSeguro + data.costoMensualSeguro;
    // Cuatro por mil
    data.cuatroPorMil = Math.round((data.montoSolicitado + data.valorTotalSeguro) * 0.004);
    // Costo de Interes
    data.costoDeInteres = data.valorTotalSeguro + data.cuatroPorMil + data.montoSolicitado;
    let costoDeInteres = 1 - Math.pow((1 + data.nominalMesVencido), - (cuota - data.periodoGracia));
    costoDeInteres = (costoDeInteres * data.valorCuotaSinSeguro) / data.nominalMesVencido;
    data.costoDeInteres = costoDeInteres - data.costoDeInteres;
    return data;
  }

  public getDataCuotas(): any {
    return new Observable(observer => observer.next(this.dataCuotas));
  }
}

import { Injectable } from '@angular/core';
import { CuotasService } from './cuotas.service';
import { Cuota } from '../models/cuota';
import { RespuestaCalculadora } from '../models/respuesta-calculadora';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public cuotas: Cuota[] = [];
  public dataCuotas: RespuestaCalculadora[] = [];
  public clickCuota: RespuestaCalculadora;
  public constanteSeguro = 1200 / 1000000;
  public constanteCuatroPorMil = 4 / 1000;
  public convenio = false;
  private subscription: Subscription;

  constructor(public cuotasService: CuotasService) {
    this.getCuotas();
    this.clickCuota = new RespuestaCalculadora();
  }

  private getCuotas() {
    this.subscription = this.cuotasService.observableCuotas
    .subscribe(item => {
    this.cuotas = item;
    });
  }

  public calculateCuota(monto: number, tasa?: number): Promise<RespuestaCalculadora[]> {
    return new Promise((resolve, reject) => {
      const data: RespuestaCalculadora[] = [];
      // tslint:disable-next-line: forin
      for (const cuota of this.cuotas) {
        data.push(this.data(monto, cuota.valorNumerico, tasa));
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
    // Calculo Nominal Mes Vencido
    data.nominalMesVencido = this.calculoNMV(tasa);
    data.valorTotalSeguro =  this.calcularTotalSeguro(monto, cuota);
    data.montoTotalFinanciamiento = data.valorTotalSeguro + data.montoSolicitado;
    // calculo Valor Futuro
    const valorFuturo = this.calculoValorFuturo(data.montoTotalFinanciamiento, data.nominalMesVencido, data.periodoGracia);
    // Calculo Mensual cuota
    data.costoMensualSeguro = this.functionPago(this.constanteSeguro, cuota - data.periodoGracia, data.valorTotalSeguro);
    // calculo Mensual seguro
    data.valorCuotaSinSeguro = this.functionPago(data.nominalMesVencido, cuota - data.periodoGracia, valorFuturo);
    data.valorCuotaConSeguro = data.valorCuotaSinSeguro + data.costoMensualSeguro;
    // calculo Cuatro por mil
    data.cuatroPorMil = this.calculoCuatroPormil(monto, data.valorTotalSeguro);
    // calculo Costo de Interes
    const costoDeInteres = data.valorTotalSeguro + data.cuatroPorMil + data.montoSolicitado;
    data.costoDeInteres = this.calculoCostoDeInteres(data.nominalMesVencido, cuota - data.periodoGracia, data.valorCuotaSinSeguro);
    data.costoDeInteres -= costoDeInteres;
    return data;
  }

  public functionPago(nmv: number, cuotas: number, valor: number) {
    const parteUno = valor * nmv;
    const parteDos = 1 - Math.pow((1 + nmv), (- (cuotas)));
    return Math.round(parteUno / parteDos);
  }

  public calcularTotalSeguro( valor: number, cuotas: number) {
    return Math.round(this.constanteSeguro * valor * cuotas);
  }

  public calculoNMV(tasa: number) {
    return Number(Math.pow((1 + tasa), (1 / 12)) - 1);
  }

  public calculoValorFuturo(monto: number, nmv: number, cuotas: number) {
    return monto * Math.pow(1 + nmv, cuotas);
  }

  public calculoCuatroPormil(monto: number, totalSeguro: number) {
    return Math.round((monto + totalSeguro) * this.constanteCuatroPorMil);
  }

  public calculoCostoDeInteres(nmv: number, cuota: number, valorCuotaSinSeguro: number) {
    const costoDeInteres = 1 - Math.pow((1 + nmv), - (cuota));
    return (costoDeInteres * valorCuotaSinSeguro) / nmv;
  }

  public getDataCuotas(): any {
    return new Observable(observer => observer.next(this.dataCuotas));
  }
}

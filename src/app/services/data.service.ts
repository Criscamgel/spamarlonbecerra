import { Injectable } from '@angular/core';
import { RespuestaCalculadora } from '../models/respuesta-calculadora';
import { RequestCalculoCuota } from '../models/request-calculo-cuota';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataCuotas: RespuestaCalculadora[] = [];
  public clickCuota: RespuestaCalculadora;
  public cuotaNumero: number;
  public monto: number;
  public descuento: number;
  public pagoSeleccionado: number;
  public observableDescuento: any;
  public observableMonto: any;
  public observablePagoSeleccionado: any;
  public convenio = false;
  public cuotaCalculada = false;
  public disabledRadios;
  public descuentoErroneo = false;

  constructor(private http: HttpClient) {
    this.clickCuota = new RespuestaCalculadora();
    /* Observables */
    this.observableMonto = new BehaviorSubject<number>(this.monto);
    this.observableDescuento = new BehaviorSubject<number>(this.descuento);
    this.observablePagoSeleccionado = new BehaviorSubject<number>(this.pagoSeleccionado);
  }

  public setMonto(value: number) {
    this.monto = value;
    this.eventChangeMonto();
  }
  public setDescuento(value: number) {
    this.descuento = value;
    this.eventChangeDescuento();
  }
  public setPagoSeleccionado(value: number) {
    this.pagoSeleccionado = value;
    this.eventChangePagoSeleccionado();
  }

  /* Emit Observable */
  eventChangeMonto() {
    this.observableMonto.next(this.monto);
  }
  eventChangeDescuento() {
    this.observableDescuento.next(this.descuento);
  }

  eventChangePagoSeleccionado() {
    this.observablePagoSeleccionado.next(this.pagoSeleccionado);
  }

  public set setDataCuotas(data: RespuestaCalculadora[]) {
    this.dataCuotas = data;
  }

  public get getDataCuotas(): RespuestaCalculadora[] {
    return this.dataCuotas;
  }

  public set setClikCuota(cuota: RespuestaCalculadora) {
    this.clickCuota = cuota;
  }

  public get getClickCuota(): RespuestaCalculadora {
    return this.clickCuota;
  }

  public calculoCuotas(request: RequestCalculoCuota): Observable<RespuestaCalculadora[]> {
    return this.http.post<RespuestaCalculadora[]>(`${environment.backBdUrl}/calculosCuotas`, request);
  }
}

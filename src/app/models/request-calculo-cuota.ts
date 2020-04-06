import { Constants } from '../models/constants';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class RequestCalculoCuota {
    aliado: string;
    cantidadCuotas: number;
    valorSolicitado: number;
    descuento: number;
    porcentajeCuotaInicial: number;

    constructor() {
        this.aliado = Constants.ALIADO;
        this.cantidadCuotas = 0;
        this.valorSolicitado = 0;
        this.descuento = 0;
        this.porcentajeCuotaInicial = 0;
    }
}

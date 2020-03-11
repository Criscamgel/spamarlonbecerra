export class RespuestaCalculadora {

    valorCuotaConSeguro: any;
    valorCuotaSinSeguro: number;
    valorTotalSeguro: number;
    costoMensualSeguro: number;
    montoTotalFinanciamiento: number;
    valorConDescuento: number;
    numeroCuotas: number;
    montoSolicitado: number;
    nominalMesVencido: any;
    seguroCuota: number;
    tasaEfectivaAnual: number;
    periodoGracia: number;
    cuatroPorMil: number;
    costoDeInteres: number;

    constructor() {
        this.valorCuotaConSeguro = 0;
        this.valorCuotaSinSeguro = 0;
        this.valorTotalSeguro = 0;
        this.costoMensualSeguro = 0;
        this.montoTotalFinanciamiento = 0;
        this.valorConDescuento = 0;
        this.numeroCuotas = 0;
        this.montoSolicitado = 0;
        this.nominalMesVencido = 0;
        this.tasaEfectivaAnual = 0;
        this.periodoGracia = 3;
        this.cuatroPorMil = 0;
        this.costoDeInteres = 0;
    }

}

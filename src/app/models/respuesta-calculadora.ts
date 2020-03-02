export class RespuestaCalculadora {

    valorCuotaConSeguro: number;
    valorCuotaSinSeguro: number;
    valorTotalSeguro: number;
    costoMensualSeguro: number;
    montoTotalFinanciamiento: number;
    valorConDescuento: number;
    numeroCuotas: number;
    montoSolicitado: number;
    nominalMesVencido: number;
    seguroCuota: number;
    tasaEfectivaAnual: number;

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
        this.seguroCuota = 0;
        this.tasaEfectivaAnual = 0;
    }

}

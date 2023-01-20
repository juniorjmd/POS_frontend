import { Time } from "@angular/common";
import { Clientes } from "./clientes.interface";

export interface Documento   {
    'orden':number,
    'tipoDocumentoFinal':string,
    'idDocumentoFinal':string,
    'establecimiento':number,
    'cantidadVendida':number,
    'valorParcial':number,
    'descuento':number,
    'valorIVA':number,
    'valorTotal':number,
    'fecha':Date,
    'hora':Time,
    'usuario':number,
    'estado':number,
    'idCierre'?:number,
    'pago_iva'?:number,
    'tipoDeVenta':number,
    'estadoFactura':number,
    'fecha_entrega'?:Date,
    'porc_retefuente'?:number,
    'retefuente'?:number,
    'remisiones'?:number,
    'cod_orden_compra':string,
    'COSTOS'?:number,
    'cod_vendedor'?:number ,
    'cliente'?: Clientes,
    'impuestos'?:DocumentoImpuestos[],
    'listado'?:DocumentoListado[],
    'idConsecutivo'?:number,
    'estadoContador'?:number,
    'consecutivoDesde'?:number,
    'consecutivoHasta'?:number,
    'tipoContador'?:number,
    'nombreEstadoContador'?:string,
    'nombreTipoContador'?:string,
    'resolucion'?:string,
    'fechaInicioResolucion'?:number|Date,
    'fechaFinResolucion'?:number|Date,
    'nombreUsuarioResolucion'?:string
    'id_cliente'?:Clientes
 }
export interface DocumentoImpuestos{
    'id' : number,
    'documento' ?: number,
    'impuesto' : number,
    'fecha' :Date ,
    'usuario' : number,
    'cantidad' : number,
    'valorImpuesto' : number,
    'totalImpuesto' : number
}
 export interface DocumentoListado{
   'id':number,
    'orden':number,
    'tipoDocumento':number,
    'idDocumento':number,
    'idProducto':string,
    'nombreProducto':string,
    'presioVenta':number,
    'porcent_iva':number,
    'presioSinIVa':number,
    'IVA':number,
    'cantidadVendida':number,
    'descuento':number,
    'valorTotal':number,
    'usuario':number,
    'fecha':Date,
    'hora':Time,
    'maq_activa':string,
    'estado_venta':number,
    'cant_real_descontada':number,
    'idDocumentoFinal':string,
    'tipo_documento_nombre'?:string,
    'estado_linea_venta' ?:string
   
 }
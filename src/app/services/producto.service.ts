import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loading } from 'src/app/models/app.loading';
import { DocumentoListado } from '../interfaces/documento.interface';
import { OdooPrd } from '../interfaces/odoo-prd';
import { Usuarios } from '../interfaces/usuario.interface';
import { actions } from '../models/app.db.actions';
import { TABLA } from '../models/app.db.tables';
import { httpOptions, url } from '../models/app.db.url';
import { vistas } from '../models/app.db.view';
import { UsuarioModel } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient ,
    private loading : loading ){ 
    console.log('servicios productos inicializado');  
}
getTiposDeDocumentos(){
  let datos = {"action": actions.actionSelect ,
               "_tabla" : vistas.tiposDeDocumentos
              };
  console.log('servicios de usuarios activo - getCategorias' ,url.action , datos, httpOptions());
  return this.http.post(url.action , datos, httpOptions()) ;
} 
getCategorias(){
  let datos = {"action": actions.actionSelect ,
               "_tabla" : vistas.categorias
              };
  console.log('servicios de usuarios activo - getCategorias' ,url.action , datos, httpOptions());
  return this.http.post(url.action , datos, httpOptions()) ;
} 
/*buscar producto por codigo de barra validando la existencia */
getProductosCodBarrasVCnt(codPrd){
  let datos = {"action": actions.buscarProducto ,
      "_limit" : 1 , "_codBarra" : true , "_data" : codPrd ,  "_validar_existencia" : true ,
        "_sin_parceros" : true
              };
  console.log('servicios getProductosCodBarrasVCnt' ,url.action , datos, httpOptions());
  return this.http.post(url.action , datos, httpOptions()) ;
} 
 

getProductosPorCategoria(codCategoria){
  let datos = {"action": actions.buscarProducto ,
      "_limit" : 100 , "_categoria" : true , "_data" : codCategoria ,  "_validar_existencia" : false 
              };
  console.log('servicios getProductosPorCategoria' ,url.action , datos, httpOptions());
  return this.http.post(url.action , datos, httpOptions()) ;
} 


getProductosGeneral(limit){
  let datos;
  if( limit > 0 ){
      datos   = {"action": actions.buscarProducto ,
  "_limit" : limit ,   "_validar_existencia" : false 
          };}else{
      datos = {"action": actions.buscarProducto ,  "_validar_existencia" : false 
              };
  }
  
  console.log('servicios getProductosPorMarca' ,url.action , datos, httpOptions());
  return this.http.post(url.action , datos, httpOptions()) ;
} 
getProductosPorMarca(codMarca){
  let datos = {"action": actions.buscarProducto ,
      "_limit" : 100 , "_marca" : true , "_data" : codMarca ,  "_validar_existencia" : false 
              };
  console.log('servicios getProductosPorMarca' ,url.action , datos, httpOptions());
  return this.http.post(url.action , datos, httpOptions()) ;
} 


getProductosPorNombre(limit , texto){
  let datos ;
  if( limit > 0 ){ 
    datos = {"action": actions.buscarProducto ,
      "_limit" : limit , "_descripcion" : true , "_data" : texto ,  "_validar_existencia" : false 
              }; }
              else{
                  datos = {"action": actions.buscarProducto ,
      "_descripcion" : true , "_data" : texto ,  "_validar_existencia" : false 
              };  
              }
  console.log('servicios getProductosPorMarca' ,url.action , datos, httpOptions());
  return this.http.post(url.action , datos, httpOptions()) ;
} 
//actionStockMoveDevolucion

guardarPrdCompra(producto : OdooPrd){

  let datos = {"action": actions.actionStockMove , 
  "_precio_brt_prd" : producto.lst_price    , 
  "_iva_porc" : producto.impuestos.datos[0].amount  ,
   "_precio_siniva_prd" : producto.precio_sin_iva    ,
   "_precio_iva_prd" : producto.valor_del_iva  , 
   "_cantidad" : producto.cantidadVendida ,
   "_descuento" : producto.descuento ,
    "_cod_prd" :   producto.id 
};
  console.log('servicios getProductosCodBarrasVCnt' ,url.action , datos, httpOptions());
  return this.http.post(url.action , datos, httpOptions()) ;
}


devolverPrdCompra(producto : DocumentoListado){

  let datos = {"action": actions.actionStockMoveDevolucion , 
  "_precio_brt_prd" : producto.presioVenta    , 
  "_iva_porc" : producto.porcent_iva  ,
   "_precio_siniva_prd" : producto.presioSinIVa    ,
   "_precio_iva_prd" : producto.IVA  , 
   "_cantidad" : producto.cant_real_descontada ,
   "_descuento" : producto.descuento ,
   "_cod_linea" :   producto.id ,
   "_cod_prd" :   producto.idProducto 
};
  console.log('servicios getProductosCodBarrasVCnt' ,url.action , datos, httpOptions());
  return this.http.post(url.action , datos, httpOptions()) ;
}
}


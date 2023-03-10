import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Permisos, Usuario  } from '../interfaces/usuario.interface';
import { actions } from '../models/app.db.actions';
import { url } from '../models/app.db.url';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
 usuario:Usuario;
    private permisosUsuario : Permisos[] = [];

    constructor(private http: HttpClient){ 
        console.log('servicios loguin inicializado');        
    }

    getLogin( L_usuario: string , L_contraseña: string) {
        let datos = {"action": actions.actionlogin ,
                    "_password" : L_contraseña,
                    "_usuario" : L_usuario
                };
        console.log('servicios datos iniciales inicializado ' ,url.login , datos, url.httpOptionsSinAutorizacion);
        return this.http.post(url.login , datos, url.httpOptionsSinAutorizacion) ;

     
        
    } 
    private getPermisos(idPerfil:number):Permisos[]{
        return this.permisosUsuario;
        
        
    }
    private getLlaveRegistro(){
        return this.usuario.key_registro;
    }
    getUsuarioLogeado( ){
        let datos = {"action": actions.actionValidarKeylogin ,
                    "_llaveSession" : localStorage.getItem('sis41254#2@')
                };
        console.log('validar llave de session inicializado ' ,url.login , datos, 
        url.httpOptionsSinAutorizacion);
        return this.http.post(url.login , datos, url.httpOptionsSinAutorizacion) ;
    }

    async  getUsuarioLogeadoAsync(){
        let datos = {"action": actions.actionValidarKeylogin ,
        "_llaveSession" : localStorage.getItem('sis41254#2@')    };
console.log('validar llave de session inicializado ' ,url.login , datos, url.httpOptionsSinAutorizacion);
return await   this.http.post(url.login , datos, url.httpOptionsSinAutorizacion).toPromise() ; 
    }
}
 
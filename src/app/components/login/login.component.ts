import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.services';
import { DatosInicialesService } from 'src/app/services/DatosIniciales.services';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { vwsucursal } from 'src/app/models/app.db.interfaces';
import { Modal1Component } from 'src/app/components/shared/modal1/modal1.component'
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Form, NgForm } from '@angular/forms';
import { select } from 'src/app/interfaces/generales.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[Modal1Component]
})
export class LoginComponent implements OnInit {
  usuario:UsuarioModel;
  sucursal:vwsucursal[]=[]; 
  constructor(private _datosInicialesService : DatosInicialesService,
    private _loginService: LoginService,
    private _Router : Router,
    private _modal : Modal1Component ) {
      localStorage.clear();
        //this.sucursal =  this._datosInicialesService.getDatosIniSucursal();
    this._datosInicialesService.getDatosIniSucursal().subscribe(
      (data:vwsucursal[])=>{
      this.sucursal = data;
      console.log(this.sucursal);
    } ,
    error => {console.log(error)
      alert( error.error.error)
    }
      ); 
   }

  ngOnInit(): void {
  this.usuario =  new UsuarioModel( undefined);
  this.usuario.Login = 'ADMIN';
  this.usuario.pass = 'prom2001josdom';

    
  }
  login( form: NgForm){
   if(form.invalid){return;}
    console.log(`usuario ${this.usuario.Login} y pass ${this.usuario.pass}`)
   // let usuario:Usuario;

    this._loginService.getLogin(this.usuario.Login , this.usuario.pass).subscribe(
      (datos:select)=>{ 
        if(datos.data.usuario.length === 0){
          
          console.log('getLogin * sin datos',datos.data.usuario); 
          alert('error de usuario')
        }else{
          console.log('getLogin',datos.data.usuario);  
          localStorage.setItem('sis41254#2@', datos.data.usuario.key_registro );
          localStorage.setItem('#2@56YH7H82BF', datos.data.usuario.id );
          this._Router.navigate(['home']);
        }
      
    } ,
    error => {console.log(error)
      alert( error.error.error)
    }
      );
      /*
    usuario = this._loginService.getLogin(this.usuario.Login , this.usuario.pass);
    console.log(usuario);
    if (typeof(usuario) === 'undefined'){
      alert('usuario o constrase??a invalidas')
    } else{
      this._Router.navigate(['home'])
    }*/
    
  }
   myFunction(x) { 
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

}
 


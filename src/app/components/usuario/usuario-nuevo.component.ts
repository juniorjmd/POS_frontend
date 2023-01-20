import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsuarioModel } from 'src/app/models/usuario.model'; 
import { loading } from 'src/app/models/app.loading';
import { usuarioService } from 'src/app/services/usuario.services'; 
@Component({
  selector: 'app-usuario-nuevo',
  template: ` <div class="container-fluid" >
  <div class="row">
      <div class="col-sm-12  ">

          <h2 class='centrado'>Editar Usuario</h2>
      </div>
  </div>
  <div class="row">  
      <div class="col-sm-3">
      <div class="form-group">
                          <label for="email">Pri. nombre: </label>
          <input type="email" [email]="true" class="o_input" [(ngModel)]="newUsuario.Nombre1" placeholder="Primer Nombre...">
      </div></div>

      <div class="col-sm-3">
      <div class="form-group">
                          <label for="email">Segundo nombre: </label>


          <input type="text" class="o_input" [(ngModel)]="newUsuario.Nombre2" placeholder="Segundo Nombre...">
      </div></div>    
      <div class="col-sm-3">
      <div class="form-group">
                          <label for="email">Primer Apellido: </label>
          <input type="text" class="o_input" [(ngModel)]="newUsuario.Apellido1" placeholder="Primer Apellido...">
          </div></div> 
      <div class="col-sm-3"> <div class="form-group">
                          <label for="email">Segundo Apellido: </label>
          <input type="text" class="o_input" [(ngModel)]="newUsuario.Apellido2" placeholder="Segundo Apellido...">
          </div>   </div>
    
    </div>
  <div class="row">  
  <div class="col-sm-2"> <div class="form-group">
                          <label for="email">Usuario: </label>
          <input type="text" class="o_input"
           [(ngModel)]="newUsuario.Login" placeholder="Usuario...">
          </div>   </div>
      <div class="col-sm-2"><div class="form-group">
                          <label for="email">Estado: </label>
          <select class=" o_input " [(ngModel)]="newUsuario.estado">
              <option value=0>Estado</option>
              <option value=1>Activo</option>
              <option value=2>Inactivo</option>
          </select>
          </div>  </div>  
      <div class="col-sm-4">
      <div class="form-group">
                          <label for="email">Mail: </label>
      <input type="text" class="o_input" [(ngModel)]="newUsuario.mail" placeholder="correo Electronico...">
    
      </div></div>
      <div class="col-sm-2">
      <div class="form-group">
                          <label for="email">Libranza: </label>
        <select class=" o_input " [(ngModel)]="newUsuario.libranza">
              <option value=0>No</option>
              <option value=1>Si</option> 
          </select>
      </div></div>
    
    
    </div>
  <div class="row">
      <div class="col-sm-12 justify-content-center centrado">
          <button class="btn btn-outline-primary" role="button" (click)='guardarUsuario()'>
              <i class="fas fa-save"></i> Guardar
          </button>
          <button class="btn btn-outline-danger" role="button" (click)='cerrarFormulario()'>
              <i class="fas fa-trash"></i>Cancelar
          </button>
      </div>
  </div>
</div>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {
  newUsuario:UsuarioModel =  new UsuarioModel(undefined);
    
  constructor( public dialogo: MatDialogRef<UsuarioNuevoComponent>,
     public loading : loading,
     private userService : usuarioService) { 
      this.newUsuario.estado = 0
  }

  ngOnInit(): void {
  }
  guardarUsuario(){
    console.log('nueva caja',this.newUsuario.Nombre1)
    this.newUsuario.usr_registro =  parseInt(localStorage.getItem('#2@56YH7H82BF')); 
    if (typeof(this.newUsuario.Nombre1) === 'undefined'){
     this.loading.hide();
     alert('Debe ingresar el Nombre de la caja');
     return;
    }
    if (typeof(this.newUsuario.Login) === 'undefined'){
      this.loading.hide();
      alert('Debe ingresar el Usuario para inicio de sesión');
      return;
     }
    if (typeof(this.newUsuario.estado) === 'undefined'){
     this.newUsuario.estado = 1 ;
    }else{
     if ( this.newUsuario.estado  === 0){
       this.newUsuario.estado = 1 ;
      }
    }
  
    
    this.loading.show(); 
    this.userService.guardarUsuarios(this.newUsuario).subscribe(
     (respuesta:any)=>{console.log(respuesta)
      
     if (respuesta.error === 'ok'){
       alert('datos ingresados con exito');  
       this.newUsuario =  new UsuarioModel(undefined); 
     }else{
       alert(respuesta.error);
     }
     this.loading.hide();
     this.cerrarFormularioTrue()
     })
  }
  cerrarFormulario(){
    this.dialogo.close(false);
  }
  cerrarFormularioTrue(){
    this.dialogo.close(true);
  }
  limpiarFormulario(){
    this.newUsuario = new UsuarioModel(undefined);
  }
}

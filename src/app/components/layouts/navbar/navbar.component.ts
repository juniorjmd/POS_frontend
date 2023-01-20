import { Component, OnInit } from '@angular/core';
import { vwsucursal } from 'src/app/models/app.db.interfaces';
import { DatosInicialesService  } from '../../../services/DatosIniciales.services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html' ,
  
  styleUrls: ['./navbar.component.css'  ]
})
export class NavbarComponent implements OnInit {
  llaveIncio:string;
  sucursal : vwsucursal[] = [];
  constructor( private _datosInicialesService: DatosInicialesService) { 
    this.llaveIncio = ''; 
    this._datosInicialesService.getDatosIniSucursal().subscribe(
      (data:vwsucursal[])=>{
      this.sucursal = data;
      console.log(this.sucursal);
    } ,
    error => alert(error.error.error));
    
  }

  ngOnInit(): void {  }

}

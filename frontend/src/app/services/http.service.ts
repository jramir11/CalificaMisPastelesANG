import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'})

export class HttpService {
    constructor(private _http: HttpClient) {}
    getIngresarComentario(id: string, puntuacion: string, comentario: string){
      let direccion= `${environment.serviceGetIngresarComentario}/${id}`;
      return this._http.post(direccion,{puntuacion, comentario})
    }
    getBuscarUno(id:String){
      let direccion= `${environment.serviceGetbuscarUno}/${id}`;
      return this._http.get(direccion);
    }
    getNuevo(nombrePastelero: string, fotoPastelUrl: string){
      let direccion= (environment.serviceGetnuevo);
      return this._http.post(direccion,{nombrePastelero, fotoPastelUrl})
    }
    getBuscarTodos(){
      return this._http.get(environment.serviceGetbuscarTodos);
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularPasteles';
  datosBuscaTodo : any
  datosBuscaUno: any
  muestraTodos: boolean = false
  muestraUno: boolean = false
  muestraDetalle: boolean = false
  newTask: any
  formPastel!: FormGroup
  formComentario!: FormGroup
  indice: string
  promedio: number = 0;


  constructor(private _httpService: HttpService, private formBuilder: FormBuilder){}

  ngOnInit(){
    this.formPastel = this.formBuilder.group({
      nombre:[''],
      imagen:['']
    })
    this.formComentario = this.formBuilder.group({
      puntuacion:[''],
      comentario:['']
    })
    this.buscarTodos()
  }

  ingresarNuevoPastel(){
    const {nombre, imagen} = this.formPastel.value
    // console.log("1111",nombre,imagen);
    let tempobservable = this._httpService.getNuevo(nombre, imagen)
    tempobservable.subscribe(data => {
    this.datosBuscaUno = data;
    this.muestraDetalle = false;
    this.buscarTodos();
    this.formPastel.reset()
    })
  }



buscarTodos(){
    let observable = this._httpService.getBuscarTodos()
    observable.subscribe(data => {
    // console.log("Got our tasks1!", data)
    this.muestraTodos = true;
    this.muestraUno = false;
    this.muestraDetalle = false;
    this.datosBuscaTodo = data;
    });
}

buscarUno(id: String){
    this.muestraDetalle = false;
    let observable = this._httpService.getBuscarUno(id);
    observable.subscribe(data => {
      this.datosBuscaUno = data;
      let suma: number = 0;
      // console.log("1111",this.datosBuscaUno)
      // console.log("2222",this.datosBuscaUno.nombrePastelero);
      // console.log("3333",this.datosBuscaUno.comentarioPastel);
      if (this.datosBuscaUno.comentarioPastel.length > 0){
        for (let i = 0; i < this.datosBuscaUno.comentarioPastel.length; i++){
          suma = suma + parseInt(this.datosBuscaUno.comentarioPastel[i].puntuacion);
        }
        this.promedio = Math.round(suma/this.datosBuscaUno.comentarioPastel.length);
        }
        this.muestraDetalle = true;
      });
  }

  ingresarComentario(id: string){
    let {puntuacion, comentario} = this.formComentario.value
    if (puntuacion<1){ puntuacion=1}
    let tempobservable = this._httpService.getIngresarComentario(id, puntuacion, comentario)
    tempobservable.subscribe(data => {
    this.datosBuscaUno = data;
    this.muestraDetalle = false;
    this.formComentario.reset()
    })
  }

}

import { Empleado } from './../models/empleado';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<---

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  URL_API= 'http://localhost:3000/empleados/'; //<-----
  public empleado:Empleado=
  {id:0, nombre:'',puesto:'',email:'',sueldo:0};

  //empleados: Empleado[]=[{_id:'1',nombre:'Hugo',puesto:'Programador Jr.',email:'hugo@disney.com',sueldo:100}];
  empleados: Empleado[]=[];

  //constructor() { }
  constructor(private http: HttpClient){}     //<----------
  
  getEmpleados(){
    return this.http.get<Empleado[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  createEmpleado(empleado:Empleado){
    ///const id= this.empleados[this.empleados.length-1]._id;
     ///empleado._id= id;
    // console.log(id);
     ///this.empleados.push(empleado);
    // return this.empleados;
    return this.http.post(this.URL_API,empleado);
  }

  deleteEmpleado(id:number){
     ///const pos = this.empleados.findIndex(
      // item => item._id===_id);
      // console.log(pos);
      // this.empleados.splice(pos,1);
     //return this.empleados;
     return this.http.delete(this.URL_API+id);
      
    }

    editEmpleado(empleado:Empleado){
      /// const pos= this.empleados.findIndex(
      ///   item => item._id===empleado._id);
      //     console.log(pos);
      ///     this.empleados[pos]=empleado;
      //     return this.empleados;
      return this.http.put(this.URL_API+empleado.id,empleado);
    }
}

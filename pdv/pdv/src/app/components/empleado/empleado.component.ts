import { Empleado } from './../../models/empleado';
import { EmpleadoService } from './../../services/empleado.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(public empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    //console.log(this.empleadoService.getEmpleados());
    this.getEmpleados();
  }

  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe(
      res => {
        this.empleadoService.empleados= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createEmpleado(form:NgForm){
     if(form.value.id!==0){                       //form.value.id
       alert('actualizando'); 
       this.empleadoService.editEmpleado(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
       );
     }else{//Creando
    this.empleadoService.createEmpleado(form.value).subscribe(
      res=> {
        this.getEmpleados();
        form.reset();
      },
      err=> console.log(err)
    )}
  }     

  deleteEmpleado(_id:any){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando '+_id);
     if(resp){
       this.empleadoService.deleteEmpleado(_id).subscribe(
        (res)=>{
          this.getEmpleados();
        },
        (err)=> console.log(err)
       );
     }
  }

  editEmpleado(empleado:Empleado){
    this.empleadoService.empleado= empleado;
  }

  formReset(form:NgForm){
    this.empleadoService.empleado=form.value;
    form.reset();
  }
}

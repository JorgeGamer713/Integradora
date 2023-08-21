import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DetalleService } from 'src/app/detalle.service';
import { Detalle } from 'src/app/models/detalle-venta';
import { ProductosService } from 'src/app/productos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleComponent implements OnInit {
  detalle: Detalle[] = [];
  detalles: Detalle = { id_detalle: 0, id_venta: 0, id_producto: 0, cantidad: 0, precio_unit: 0, descripcion: '' };
  totalVenta: number = 0;
  

  constructor(public detalleService: DetalleService, public productoService :ProductosService) {}

  ngOnInit(): void {
    //this.obtenerDetalle();
    this.obtenerProductos();
   /*  this.detalleService.getDetalle().subscribe(
      detalles => {
        this.detalleService.detalles = detalles;
        // Calcular el total de la venta basado en los detalles
        this.totalVenta = this.detalleService.calcularTotalVenta();
      },
      error => {
        console.error('Error al obtener los detalles:', error);
      }
    ); */
  }
  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(
      (res) => {
        this.productoService.productos=res;
      },
      error => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  obtenerDetalle(): void {
    this.detalleService.getDetalle().subscribe(
      res => {
        this.detalleService.detalles= res;
        console.log(res);
      },
      error => {
        console.error('Error al obtener los detalles:', error);
      }
    );
  }

  obtenerDetalleById(id:number): void {
    this.detalleService.getDetalleById(id).subscribe(
      res => {
        this.detalleService.detalles= res;
      },
      error => {
        console.error('Error al obtener los detalles:', error);
      }
    );
  }

  agregarDetalles(form:NgForm): void {
    this.detalleService.agregarDetalle(form.value).subscribe(
      res => {
        console.log(res.message);
        this.obtenerDetalleById(form.value.id_venta);
       
       /*  const cantidad = form.value.cantidad;
        console.log(this.detalles);
        const precio_unit = this.detalles.precio_unit;
  
        console.log('Cantidad:', cantidad);
        console.log('Precio Unitario:', precio_unit);

        
  
        // Calcular el subtotal del detalle actual
        const subtotalDetalle = cantidad * precio_unit;
  
        // Sumar el subtotal al total de la venta
        this.totalVenta += subtotalDetalle;
        console.log ('total:',this.totalVenta) */
      },
      error => {
        console.error('Error al agregar el detalle:', error);
      }
    );
  }

 /*  agregarDetalles(form: NgForm): void { */
    //     // Llamada al servicio para agregar el detalle
    //     this.detalleService.agregarDetalle(form.value).subscribe(
    //       res => {
    //         console.log(res.message);
    //         this.obtenerDetalleById(form.value.id_venta);
      
    //         // Obtener el valor de cantidad y precio_unit del formulario
    //         const cantidad = form.value.cantidad;
    //         const precio_unit = this.detalles.precio_unit; // Obtener el precio unitario del detalle actual
      
    //         console.log('Cantidad:', cantidad);
    //         console.log('Precio Unitario:', precio_unit);
      
    //         // Calcular el subtotal del detalle actual
    //         const subtotalDetalle = cantidad * precio_unit;
      
    //         // Sumar el subtotal al total de la venta
    //         this.totalVenta += subtotalDetalle;
    //       },
    //       error => {
    //         console.error('Error al agregar el detalle:', error);
    //       }
    //     );
    //   }

  actualizarDetalle(id: number): void {
    this.detalleService.actualizarDetalle(id, this.detalles).subscribe(
      response => {
        console.log(response.message);
        this.obtenerDetalle();
        this.detalles = { id_detalle: 0, id_venta: 0, id_producto: 0, cantidad: 0, precio_unit: 0, descripcion: ''};
      },
      error => {
        console.error('Error al actualizar el detalle:', error);
      }
    );
  }

  eliminarDetalle(id: number): void {
    this.detalleService.eliminarDetalle(id).subscribe(
      response => {
        console.log(response.message);
        this.obtenerDetalle();
      },
      error => {
        console.error('Error al eliminar el Detalle:', error);
      }
    );
  }
}

// @Component({
//   selector: 'app-detalle',
//   templateUrl: './detalle-venta.component.html',
//   styleUrls: ['./detalle-venta.component.css']
// })
// export class DetalleComponent implements OnInit {
//   detalle: Detalle[] = [];
//   detalles: Detalle = { id_detalle: 0, id_venta: 0, id_producto: 0, cantidad: 0, precio_unit: 0};
//   totalVenta: number = 0; // Variable para almacenar el total de la venta
//   total: number = 0;

  

//   constructor(public detalleService: DetalleService, public productoService :ProductosService) {}

//   ngOnInit(): void {
//     //this.obtenerDetalle();
//     this.obtenerProductos();
//   }
//   obtenerProductos(): void {
//     this.productoService.getProductos().subscribe(
//       (res) => {
//         this.productoService.productos=res;
//       },
//       error => {
//         console.error('Error al obtener los productos:', error);
//       }
//     );
//   }

//   obtenerDetalle(): void {
//     this.detalleService.getDetalle().subscribe(
//       res => {
//         this.detalleService.detalles= res;
//         console.log(res);
//       },
//       error => {
//         console.error('Error al obtener los detalles:', error);
//       }
//     );
//   }

//   obtenerDetalleById(id:number): void {
//     this.detalleService.getDetalleById(id).subscribe(
//       res => {
//         this.detalleService.detalles= res;
//       },
//       error => {
//         console.error('Error al obtener los detalles:', error);
//       }
//     );
//   }

//   /* agregarDetalles(form:NgForm): void {
//     this.detalleService.agregarDetalle(form.value).subscribe(
//       res => {
//         console.log(res.message);
//         this.obtenerDetalleById(form.value.id_venta);
//       },
//       error => {
//         console.error('Error al agregar el detalle:', error);
//       }
//     );
//   }
//  */

//   agregarDetalles(form: NgForm): void {
//     // Llamada al servicio para agregar el detalle
//     this.detalleService.agregarDetalle(form.value).subscribe(
//       res => {
//         console.log(res.message);
//         this.obtenerDetalleById(form.value.id_venta);
  
//         // Obtener el valor de cantidad y precio_unit del formulario
//         const cantidad = form.value.cantidad;
//         const precio_unit = this.detalles.precio_unit; // Obtener el precio unitario del detalle actual
  
//         console.log('Cantidad:', cantidad);
//         console.log('Precio Unitario:', precio_unit);
  
//         // Calcular el subtotal del detalle actual
//         const subtotalDetalle = cantidad * precio_unit;
  
//         // Sumar el subtotal al total de la venta
//         this.totalVenta += subtotalDetalle;
//       },
//       error => {
//         console.error('Error al agregar el detalle:', error);
//       }
//     );
//   }
  
  

//   actualizarDetalle(id: number): void {
//     this.detalleService.actualizarDetalle(id, this.detalles).subscribe(
//       response => {
//         console.log(response.message);
//         this.obtenerDetalle();
//         this.detalles = { id_detalle: 0, id_venta: 0, id_producto: 0, cantidad: 0, precio_unit: 0};
//       },
//       error => {
//         console.error('Error al actualizar el detalle:', error);
//       }
//     );
//   }

//   eliminarDetalle(id: number): void {
//     this.detalleService.eliminarDetalle(id).subscribe(
//       response => {
//         console.log(response.message);
//         this.obtenerDetalle();
//       },
//       error => {
//         console.error('Error al eliminar el Detalle:', error);
//       }
//     );
//   }
// }

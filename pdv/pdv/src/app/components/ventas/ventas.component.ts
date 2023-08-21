import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/venta.service';
import { Venta } from 'src/app/models/venta';

@Component({
  selector: 'app-venta',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  venta: Venta[] = [];
  ventas: Venta = { id_venta:0, fecha:'', id_usuario:0, monto:0};

  constructor(private VentaService: VentaService) {}

  ngOnInit(): void {
    this.obtenerVenta();
  }
 
  obtenerVenta(): void {
    this.VentaService.getVenta().subscribe(
      venta => {
        this.venta = venta;
      },
      error => {
        console.error('Error al obtener el usuario:', this.venta);
      }
    );
  }

  agregarVenta(): void {
    this.VentaService.agregarVenta(this.ventas).subscribe(
      response => {
        console.log(response.message);
        this.obtenerVenta();
        this.ventas= {id_venta:0, fecha:'', id_usuario:0, monto:0};
      },
      error => {
        console.error('Error al agregar la venta:', error);
      }
    );
  }

  actualizarVenta(id: number): void {
    this.VentaService.actualizarVenta(id, this.ventas).subscribe(
      response => {
        console.log(response.message);
        this.obtenerVenta();
        this.ventas= {id_venta:0, fecha:'', id_usuario:0, monto:0};
      },
      error => {
        console.error('Error al actualizar la venta:', error);
      }
    );
  }

  eliminarVenta(id: number): void {
    this.VentaService.eliminarVenta(id).subscribe(
      response => {
        console.log(response.message);
        this.obtenerVenta();
      },
      error => {
        console.error('Error al eliminar la venta:', error);
      }
    );
  }
}

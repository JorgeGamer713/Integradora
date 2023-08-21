import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/factura.service';
import { Factura } from 'src/app/models/factura';

@Component({
  selector: 'app-clientes',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  factura: Factura[] = [];
  facturas: Factura = { id_factura:0, id_cliente:0, id_venta:0, total:0};

  constructor(private FacturaService: FacturaService) {}

  ngOnInit(): void {
    this.obtenerFactura();
  }
 
  obtenerFactura(): void {
    this.FacturaService.getFactura().subscribe(
      factura => {
        this.factura = factura;
      },
      error => {
        console.error('Error al obtener la factura:', error);
      }
    );
  }

  agregarFactura(): void {
    this.FacturaService.agregarFactura(this.facturas).subscribe(
      response => {
        console.log(response.message);
        this.obtenerFactura();
        this.facturas = {id_factura:0, id_cliente:0, id_venta:0, total:0};
      },
      error => {
        console.error('Error al agregar la factura:', error);
      }
    );
  }

  actualizarFactura(id: number): void {
    this.FacturaService.actualizarFactura(id, this.facturas).subscribe(
      response => {
        console.log(response.message);
        this.obtenerFactura();
        this.facturas = {id_factura:0, id_cliente:0, id_venta:0, total:0};
      },
      error => {
        console.error('Error al actualizar la factura:', error);
      }
    );
  }

  eliminarFactura(id: number): void {
    this.FacturaService.eliminarFactura(id).subscribe(
      response => {
        console.log(response.message);
        this.obtenerFactura();
      },
      error => {
        console.error('Error al eliminar el cliente:', error);
      }
    );
  }
}

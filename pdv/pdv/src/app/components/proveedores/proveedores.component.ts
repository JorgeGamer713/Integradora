import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/proveedor.service';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-clientes',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedor: Proveedor[] = [];
  proveedore: Proveedor = { id_proovedor:0, proveedor:'', telefono:'', correo:''};

  constructor(private ProveedorService: ProveedorService) {}

  ngOnInit(): void {
    this.obtenerProveedor();
  }
 
  obtenerProveedor(): void {
    this.ProveedorService.getProveedor().subscribe(
      proveedor => {
        this.proveedor = proveedor;
      },
      error => {
        console.error('Error al obtener el proveedor:', error);
      }
    );
  }

  agregarProveedor(): void {
    this.ProveedorService.agregarProveedor(this.proveedore).subscribe(
      response => {
        console.log(response.message);
        this.obtenerProveedor();
        this.proveedore = {id_proovedor:0, proveedor:'', telefono:'', correo:''};
      },
      error => {
        console.error('Error al agregar el proveedor:', error);
      }
    );
  }

  actualizarProveedor(id: number): void {
    this.ProveedorService.actualizarProveedor(id, this.proveedore).subscribe(
      response => {
        console.log(response.message);
        this.obtenerProveedor();
        this.proveedore = {id_proovedor:0, proveedor:'', telefono:'', correo:''};
      },
      error => {
        console.error('Error al actualizar el proveedor:', error);
      }
    );
  }

  eliminarProveedor(id: number): void {
    this.ProveedorService.eliminarProveedor(id).subscribe(
      response => {
        console.log(response.message);
        this.obtenerProveedor();
      },
      error => {
        console.error('Error al eliminar el proveedor:', error);
      }
    );
  }
}

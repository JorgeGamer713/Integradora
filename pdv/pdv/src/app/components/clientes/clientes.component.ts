import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  cliente: Cliente = { id_cliente: 0, nom_cliente: '', rfc: '', telefono: '', correo: ''};

  constructor(private ClientesService: ClientesService) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.ClientesService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      },
      error => {
        console.error('Error al obtener los clientes:', error);
      }
    );
  }

  agregarCliente(): void {
    this.ClientesService.agregarClientes(this.cliente).subscribe(
      response => {
        console.log(response.message);
        this.obtenerClientes();
        this.cliente = { id_cliente: 0, nom_cliente: '', rfc: '', telefono: '', correo: '' };
      },
      error => {
        console.error('Error al agregar el cliente:', error);
      }
    );
  }

  actualizarCliente(id: number): void {
    this.ClientesService.actualizarClientes(id, this.cliente).subscribe(
      response => {
        console.log(response.message);
        this.obtenerClientes();
        this.cliente = {id_cliente: 0, nom_cliente: '', rfc: '', telefono: '', correo: '' };
      },
      error => {
        console.error('Error al actualizar el cliente:', error);
      }
    );
  }

  eliminarCliente(id: number): void {
    this.ClientesService.eliminarClientes(id).subscribe(
      response => {
        console.log(response.message);
        this.obtenerClientes();
      },
      error => {
        console.error('Error al eliminar el cliente:', error);
      }
    );
  }
}

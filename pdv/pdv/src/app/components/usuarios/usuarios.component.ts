import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuario: Usuario[] = [];
  usuarios: Usuario = { id_usuario:0, nombre:'', id_tipo:0, pwd:''};

  constructor(private UsuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuario();
  }
 
  obtenerUsuario(): void {
    this.UsuarioService.getUsuario().subscribe(
      usuario => {
        this.usuario = usuario;
      },
      error => {
        console.error('Error al obtener el usuario:', error);
      }
    );
  }

  agregarUsuario(): void {
    this.UsuarioService.agregarUsuario(this.usuarios).subscribe(
      response => {
        console.log(response.message);
        this.obtenerUsuario();
        this.usuarios= {id_usuario:0, nombre:'', id_tipo:0, pwd:''};
      },
      error => {
        console.error('Error al agregar el usuario:', error);
      }
    );
  }

  actualizarUsuario(id: number): void {
    this.UsuarioService.actualizarUsuario(id, this.usuarios).subscribe(
      response => {
        console.log(response.message);
        this.obtenerUsuario();
        this.usuarios= {id_usuario:0, nombre:'', id_tipo:0, pwd:''};
      },
      error => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }

  eliminarUsuario(id: number): void {
    this.UsuarioService.eliminarUsuario(id).subscribe(
      response => {
        console.log(response.message);
        this.obtenerUsuario();
      },
      error => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }
}

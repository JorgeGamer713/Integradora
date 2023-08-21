import { Router } from 'express';
import { usuariosController } from '../controllers/UsuariosController';

class UsuariosRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    // Consultar todos los registros
    this.router.get('/', usuariosController.getUsuarios);
    // Consultar un registro
    this.router.get('/:id', usuariosController.getByIdUsuario);
    // Insertar un registro
    this.router.post('/', usuariosController.createUsuario);
    // Actualizar un registro
    this.router.put('/:id', usuariosController.updateUsuario);
    // Eliminar un registro
    this.router.delete('/:id', usuariosController.deleteUsuario);
  }
}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;

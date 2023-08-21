import { Router } from 'express';
import { tiposController } from '../controllers/TiposController';

class TiposRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    // Consultar todos los registros
    this.router.get('/', tiposController.getTipos);
    // Consultar un registro
    this.router.get('/:id', tiposController.getByIdTipo);
    // Insertar un registro
    this.router.post('/', tiposController.createTipo);
    // Actualizar un registro
    this.router.put('/:id', tiposController.updateTipo);
    // Eliminar un registro
    this.router.delete('/:id', tiposController.deleteTipo);
  }
}

const tiposRoutes = new TiposRoutes();
export default tiposRoutes.router;

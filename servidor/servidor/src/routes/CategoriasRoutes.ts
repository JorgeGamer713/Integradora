import { Router } from 'express';
import { categoriasController } from '../controllers/CategoriasController';

class CategoriasRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    // Consultar todos los registros
    this.router.get('/', categoriasController.getCategorias);
    // Consultar un registro
    this.router.get('/:id', categoriasController.getByIdCategoria);
    // Insertar un registro
    this.router.post('/', categoriasController.createCategoria);
    // Actualizar un registro
    this.router.put('/:id', categoriasController.updateCategoria);
    // Eliminar un registro
    this.router.delete('/:id', categoriasController.deleteCategoria);
  }
}

const categoriasRoutes = new CategoriasRoutes();
export default categoriasRoutes.router;

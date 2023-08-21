import { Router } from 'express';
import { clientesController } from '../controllers/ClientesController';

class ClientesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    // Consultar todos los registros
    this.router.get('/', clientesController.getClientes);
    // Consultar un registro
    this.router.get('/:id', clientesController.getByIdCliente);
    // Insertar un registro
    this.router.post('/', clientesController.createCliente);
    // Actualizar un registro
    this.router.put('/:id', clientesController.updateCliente);
    // Eliminar un registro
    this.router.delete('/:id', clientesController.deleteCliente);
  }
}

const clientesRoutes = new ClientesRoutes();
export default clientesRoutes.router;

import { Router } from 'express';
import { facturaController } from '../controllers/FacturaController';

class FacturaRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    // Consultar todos los registros
    this.router.get('/', facturaController.getFacturas);
    // Consultar un registro
    this.router.get('/:id', facturaController.getByIdFactura);
    // Insertar un registro
    this.router.post('/', facturaController.createFactura);
    // Actualizar un registro
    this.router.put('/:id', facturaController.updateFactura);
    // Eliminar un registro
    this.router.delete('/:id', facturaController.deleteFactura);
  }
}

const facturaRoutes = new FacturaRoutes();
export default facturaRoutes.router;

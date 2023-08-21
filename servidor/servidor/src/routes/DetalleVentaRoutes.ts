import { Router } from 'express';
import { detalleVentaController } from '../controllers/DetalleVentaController';

class DetalleVentaRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    // Consultar todos los registros
    this.router.get('/', detalleVentaController.getDetalleVentas);
    // Consultar un registro
    this.router.get('/:id', detalleVentaController.getByIdDetalleVenta);
    // Insertar un registro
    this.router.post('/', detalleVentaController.createDetalleVenta);
    // Actualizar un registro
    this.router.put('/:id', detalleVentaController.updateDetalleVenta);
    // Eliminar un registro
    this.router.delete('/:id', detalleVentaController.deleteDetalleVenta);
  }
}

const detalleVentaRoutes = new DetalleVentaRoutes();
export default detalleVentaRoutes.router;

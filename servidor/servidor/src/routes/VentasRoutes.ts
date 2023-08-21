import { Router } from 'express';
import { ventasController } from '../controllers/VentasController';

class VentasRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    // Consultar todos los registros de ventas
    this.router.get('/', ventasController.getVentas);
    // Consultar un registro de venta por su ID
    this.router.get('/:id', ventasController.getByIdVenta);
    // Insertar un nuevo registro de venta
    this.router.post('/', ventasController.createVenta);
    // Actualizar un registro de venta existente
    this.router.put('/:id', ventasController.updateVenta);
    // Eliminar un registro de venta
    this.router.delete('/:id', ventasController.deleteVenta);
  }
}

const ventasRoutes = new VentasRoutes();
export default ventasRoutes.router;

import {Router} from 'express';
import { proveedoresController } from '../controllers/ProveedoresController';
class ProveedoresRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',proveedoresController.getProveedores);
        //Consultar un registro
        this.router.get('/:id',proveedoresController.getByIdProveedor);
        //Insertar un registro
        this.router.post('/',proveedoresController.createProveedor);
        //Actualizar un registro
        this.router.put('/:id',proveedoresController.updateProveedor);
        //Eliminar un registro
        this.router.delete('/:id',proveedoresController.deleteProveedor);
    }
}
const proveedoresRoutes= new ProveedoresRoutes();
export default proveedoresRoutes.router;
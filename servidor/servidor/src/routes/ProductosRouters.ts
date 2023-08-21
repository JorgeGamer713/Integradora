import {Router} from 'express';
import { productosController } from '../controllers/ProductosController';

class ProductosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',productosController.getProductos);
        //Consultar un registro
        this.router.get('/:id',productosController.getByIdProducto);
        //Insertar un registro
        this.router.post('/',productosController.createProducto);
        //Actualizar un registro
        this.router.put('/:id',productosController.updateProducto);
        //Eliminar un registro
        this.router.delete('/:id',productosController.deleteProducto);
    }
}
const productosRoutes= new ProductosRoutes();
export default productosRoutes.router;
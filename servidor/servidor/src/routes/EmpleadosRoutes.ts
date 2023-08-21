import {Router} from 'express';
import {empleadosController} from '../controllers/EmpleadosController';

class EmpleadosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //Consultar todos los registros
        this.router.get('/',empleadosController.getEmpleados);
        //Consultar un registro
        this.router.get('/:id',empleadosController.getByIdEmpleado);
        //Insertar un registro
        this.router.post('/',empleadosController.createEmpleado);
        //Actualizar un registro
        this.router.put('/:id',empleadosController.updateEmpleado);
        //Eliminar un registro
        this.router.delete('/:id',empleadosController.deleteEmpleado);
    }
}
const empleadosRoutes= new EmpleadosRoutes();
export default empleadosRoutes.router;
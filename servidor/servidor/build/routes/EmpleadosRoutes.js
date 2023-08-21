"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmpleadosController_1 = require("../controllers/EmpleadosController");
class EmpleadosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', EmpleadosController_1.empleadosController.getEmpleados);
        //Consultar un registro
        this.router.get('/:id', EmpleadosController_1.empleadosController.getByIdEmpleado);
        //Insertar un registro
        this.router.post('/', EmpleadosController_1.empleadosController.createEmpleado);
        //Actualizar un registro
        this.router.put('/:id', EmpleadosController_1.empleadosController.updateEmpleado);
        //Eliminar un registro
        this.router.delete('/:id', EmpleadosController_1.empleadosController.deleteEmpleado);
    }
}
const empleadosRoutes = new EmpleadosRoutes();
exports.default = empleadosRoutes.router;

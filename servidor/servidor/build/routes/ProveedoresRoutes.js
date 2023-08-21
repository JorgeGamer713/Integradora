"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProveedoresController_1 = require("../controllers/ProveedoresController");
class ProveedoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', ProveedoresController_1.proveedoresController.getProveedores);
        //Consultar un registro
        this.router.get('/:id', ProveedoresController_1.proveedoresController.getByIdProveedor);
        //Insertar un registro
        this.router.post('/', ProveedoresController_1.proveedoresController.createProveedor);
        //Actualizar un registro
        this.router.put('/:id', ProveedoresController_1.proveedoresController.updateProveedor);
        //Eliminar un registro
        this.router.delete('/:id', ProveedoresController_1.proveedoresController.deleteProveedor);
    }
}
const proveedoresRoutes = new ProveedoresRoutes();
exports.default = proveedoresRoutes.router;

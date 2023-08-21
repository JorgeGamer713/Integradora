"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DetalleVentaController_1 = require("../controllers/DetalleVentaController");
class DetalleVentaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Consultar todos los registros
        this.router.get('/', DetalleVentaController_1.detalleVentaController.getDetalleVentas);
        // Consultar un registro
        this.router.get('/:id', DetalleVentaController_1.detalleVentaController.getByIdDetalleVenta);
        // Insertar un registro
        this.router.post('/', DetalleVentaController_1.detalleVentaController.createDetalleVenta);
        // Actualizar un registro
        this.router.put('/:id', DetalleVentaController_1.detalleVentaController.updateDetalleVenta);
        // Eliminar un registro
        this.router.delete('/:id', DetalleVentaController_1.detalleVentaController.deleteDetalleVenta);
    }
}
const detalleVentaRoutes = new DetalleVentaRoutes();
exports.default = detalleVentaRoutes.router;

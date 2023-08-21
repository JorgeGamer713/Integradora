"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VentasController_1 = require("../controllers/VentasController");
class VentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Consultar todos los registros de ventas
        this.router.get('/', VentasController_1.ventasController.getVentas);
        // Consultar un registro de venta por su ID
        this.router.get('/:id', VentasController_1.ventasController.getByIdVenta);
        // Insertar un nuevo registro de venta
        this.router.post('/', VentasController_1.ventasController.createVenta);
        // Actualizar un registro de venta existente
        this.router.put('/:id', VentasController_1.ventasController.updateVenta);
        // Eliminar un registro de venta
        this.router.delete('/:id', VentasController_1.ventasController.deleteVenta);
    }
}
const ventasRoutes = new VentasRoutes();
exports.default = ventasRoutes.router;

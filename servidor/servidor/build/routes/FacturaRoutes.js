"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FacturaController_1 = require("../controllers/FacturaController");
class FacturaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Consultar todos los registros
        this.router.get('/', FacturaController_1.facturaController.getFacturas);
        // Consultar un registro
        this.router.get('/:id', FacturaController_1.facturaController.getByIdFactura);
        // Insertar un registro
        this.router.post('/', FacturaController_1.facturaController.createFactura);
        // Actualizar un registro
        this.router.put('/:id', FacturaController_1.facturaController.updateFactura);
        // Eliminar un registro
        this.router.delete('/:id', FacturaController_1.facturaController.deleteFactura);
    }
}
const facturaRoutes = new FacturaRoutes();
exports.default = facturaRoutes.router;

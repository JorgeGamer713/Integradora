"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TiposController_1 = require("../controllers/TiposController");
class TiposRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Consultar todos los registros
        this.router.get('/', TiposController_1.tiposController.getTipos);
        // Consultar un registro
        this.router.get('/:id', TiposController_1.tiposController.getByIdTipo);
        // Insertar un registro
        this.router.post('/', TiposController_1.tiposController.createTipo);
        // Actualizar un registro
        this.router.put('/:id', TiposController_1.tiposController.updateTipo);
        // Eliminar un registro
        this.router.delete('/:id', TiposController_1.tiposController.deleteTipo);
    }
}
const tiposRoutes = new TiposRoutes();
exports.default = tiposRoutes.router;

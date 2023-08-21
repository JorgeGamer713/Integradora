"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientesController_1 = require("../controllers/ClientesController");
class ClientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Consultar todos los registros
        this.router.get('/', ClientesController_1.clientesController.getClientes);
        // Consultar un registro
        this.router.get('/:id', ClientesController_1.clientesController.getByIdCliente);
        // Insertar un registro
        this.router.post('/', ClientesController_1.clientesController.createCliente);
        // Actualizar un registro
        this.router.put('/:id', ClientesController_1.clientesController.updateCliente);
        // Eliminar un registro
        this.router.delete('/:id', ClientesController_1.clientesController.deleteCliente);
    }
}
const clientesRoutes = new ClientesRoutes();
exports.default = clientesRoutes.router;

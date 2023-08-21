"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuariosController_1 = require("../controllers/UsuariosController");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Consultar todos los registros
        this.router.get('/', UsuariosController_1.usuariosController.getUsuarios);
        // Consultar un registro
        this.router.get('/:id', UsuariosController_1.usuariosController.getByIdUsuario);
        // Insertar un registro
        this.router.post('/', UsuariosController_1.usuariosController.createUsuario);
        // Actualizar un registro
        this.router.put('/:id', UsuariosController_1.usuariosController.updateUsuario);
        // Eliminar un registro
        this.router.delete('/:id', UsuariosController_1.usuariosController.deleteUsuario);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;

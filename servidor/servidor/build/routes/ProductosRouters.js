"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductosController_1 = require("../controllers/ProductosController");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Consultar todos los registros
        this.router.get('/', ProductosController_1.productosController.getProductos);
        //Consultar un registro
        this.router.get('/:id', ProductosController_1.productosController.getByIdProducto);
        //Insertar un registro
        this.router.post('/', ProductosController_1.productosController.createProducto);
        //Actualizar un registro
        this.router.put('/:id', ProductosController_1.productosController.updateProducto);
        //Eliminar un registro
        this.router.delete('/:id', ProductosController_1.productosController.deleteProducto);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;

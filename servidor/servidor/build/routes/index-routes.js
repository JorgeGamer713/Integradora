"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndexController_1 = require("../controllers/IndexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', IndexController_1.indexController.saludar);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;

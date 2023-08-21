"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    saludar(req, res) {
        //const rows=  pool.query('SELECT * FROM empleados');
        //res.json(rows[0]);
        res.json({ text: 'Hola' });
    }
}
exports.indexController = new IndexController();

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detalleVentaController = void 0;
const database_1 = __importDefault(require("../database"));
class DetalleVentaController {
    getDetalleVentas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM tb_detalle_venta');
            res.json(result[0]);
        });
    }
    getByIdDetalleVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.query('SELECT * FROM `tb_detalle_venta` INNER JOIN tb_productos ON tb_detalle_venta.id_producto=tb_productos.id_producto WHERE id_venta=?;', [id]);
            if (result.length > 0) {
                res.json(result[0]);
            }
            else {
                res.status(404).json({ message: 'Detalle de venta no encontrado' });
            }
        });
    }
    createDetalleVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_detalle_venta SET ?', [req.body]);
            res.json({ message: 'Registro almacenado!' });
        });
    }
    updateDetalleVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tb_detalle_venta SET ? WHERE id_detalle = ?', [req.body, id]);
            res.json({ message: 'Registro actualizado!' });
        });
    }
    deleteDetalleVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tb_detalle_venta WHERE id_detalle = ?', [id]);
            res.json({ message: 'Registro eliminado' });
        });
    }
}
exports.detalleVentaController = new DetalleVentaController();

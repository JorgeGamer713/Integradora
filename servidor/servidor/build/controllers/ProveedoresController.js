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
exports.proveedoresController = void 0;
const database_1 = __importDefault(require("../database"));
class ProveedoresController {
    getProveedores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM tb_proveedores');
            res.json(result[0]);
        });
    }
    getByIdProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.query('SELECT * FROM tb_proveedores WHERE id_proovedor = ?', [id]);
            if (result.length > 0) {
                res.json(result[0]);
            }
            else {
                res.status(404).json({ message: 'Proveedor no encontrado' });
            }
        });
    }
    createProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_proveedores set ?', [req.body]);
            res.json({ message: 'Registro almacenado!' });
        });
    }
    updateProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tb_proveedores set ? WHERE id_proovedor = ?', [req.body, id]);
            res.json({ message: 'Registro actualizado!' });
        });
    }
    deleteProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tb_proveedores WHERE id_proovedor = ?', [id]);
            res.json({ message: 'Registro eliminado' });
        });
    }
}
exports.proveedoresController = new ProveedoresController();

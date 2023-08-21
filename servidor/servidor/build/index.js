"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index-routes"));
const EmpleadosRoutes_1 = __importDefault(require("./routes/EmpleadosRoutes"));
const ProductosRouters_1 = __importDefault(require("./routes/ProductosRouters"));
const CategoriasRoutes_1 = __importDefault(require("./routes/CategoriasRoutes"));
const ClientesRoutes_1 = __importDefault(require("./routes/ClientesRoutes"));
const DetalleVentaRoutes_1 = __importDefault(require("./routes/DetalleVentaRoutes"));
const EmpleadosRoutes_2 = __importDefault(require("./routes/EmpleadosRoutes"));
const FacturaRoutes_1 = __importDefault(require("./routes/FacturaRoutes"));
const ProveedoresRoutes_1 = __importDefault(require("./routes/ProveedoresRoutes"));
const TiposRoutes_1 = __importDefault(require("./routes/TiposRoutes"));
const VentasRoutes_1 = __importDefault(require("./routes/VentasRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //acepta formato json
        this.app.use(express_1.default.urlencoded({ extended: false })); //acepta formularios html
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/empleados/', EmpleadosRoutes_1.default);
        this.app.use('/productos/', ProductosRouters_1.default);
        this.app.use('/categorias/', CategoriasRoutes_1.default);
        this.app.use('/clientes/', ClientesRoutes_1.default);
        this.app.use('/detalleventa/', DetalleVentaRoutes_1.default);
        this.app.use('/usuarios/', EmpleadosRoutes_2.default);
        this.app.use('/factura/', FacturaRoutes_1.default);
        this.app.use('/proveedores/', ProveedoresRoutes_1.default);
        this.app.use('/tipos/', TiposRoutes_1.default);
        this.app.use('/ventas/', VentasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

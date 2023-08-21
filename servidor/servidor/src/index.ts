import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index-routes';
import empleadosRoutes from './routes/EmpleadosRoutes';
import productosRoutes from './routes/ProductosRouters';
import CategoriasRoutes from './routes/CategoriasRoutes';
import ClientesRoutes from './routes/ClientesRoutes';
import DetalleVentaRoutes from './routes/DetalleVentaRoutes';
import EmpleadosRoutes from './routes/EmpleadosRoutes';
import FacturaRoutes from './routes/FacturaRoutes';
import ProductosRouters from './routes/ProductosRouters';
import { proveedoresController } from './controllers/ProveedoresController';
import ProveedoresRoutes from './routes/ProveedoresRoutes';
import TiposRoutes from './routes/TiposRoutes';
import VentasRoutes from './routes/VentasRoutes';


class Server{
    public app:Application;
    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());   //acepta formato json
        this.app.use(express.urlencoded({extended:false})); //acepta formularios html
    }
    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/empleados/',empleadosRoutes);
        this.app.use('/productos/',productosRoutes);
        this.app.use('/categorias/',CategoriasRoutes);
        this.app.use('/clientes/',ClientesRoutes);
        this.app.use('/detalleventa/',DetalleVentaRoutes);
        this.app.use('/usuarios/',EmpleadosRoutes);
        this.app.use('/factura/',FacturaRoutes);
        this.app.use('/proveedores/',ProveedoresRoutes);
        this.app.use('/tipos/',TiposRoutes);
        this.app.use('/ventas/',VentasRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port ',this.app.get('port'));
        });
    }
}
const server= new Server();
server.start();


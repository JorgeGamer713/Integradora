import { NgModule } from '@angular/core';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DetalleComponent } from './components/detalle-venta/detalle-venta.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { TiposComponent } from './components/tipos/tipos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'detalle_venta', component: DetalleComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'tipos', component: TiposComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'ventas', component: VentasComponent },
  {path:'empleados',component:EmpleadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

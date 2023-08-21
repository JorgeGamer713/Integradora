import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DetalleComponent } from './components/detalle-venta/detalle-venta.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { TiposComponent } from './components/tipos/tipos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { VentasComponent } from './components/ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CategoriasComponent,
    ClientesComponent,
    DetalleComponent,
    FacturasComponent,
    ProductosComponent,
    ProveedoresComponent,
    TiposComponent,
    UsuariosComponent,
    VentasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule, FormsModule, HttpClientModule,   //<------
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

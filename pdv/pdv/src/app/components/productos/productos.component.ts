import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { Producto } from 'src/app/models/producto';
import { ProveedorService } from 'src/app/proveedor.service'; 
import { CategoriasService } from 'src/app/categorias.service';
import { CategoriasComponent } from '../categorias/categorias.component';
import { Categoria } from 'src/app/models/categoria';
import { Proveedor } from 'src/app/models/proveedor';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  categorias: Categoria[] = [];
  provedores: Proveedor []=[];
  proveedor : Proveedor = {id_proovedor: 0, proveedor: '', telefono: '', correo: ''}
  productos: Producto[] = [];
  producto: Producto = { id_producto: 0, descripcion: '', proveedor:'',id_proovedor: 0 , id_categoria: 0, precio_unit: 0, existencias: 0, stock_minimo: 0 };
  
  
  constructor(public productosService: ProductosService , public provedoresService:ProveedorService, public categoriasService: CategoriasService ) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.categoriasService.getCategorias();
    this.obtenerProveedor();
    
    
  }

  obtenerProveedor(): void {
    this.provedoresService.getProveedor().subscribe(
      (res) => {
        this.provedoresService.provedores=res;
      },
      error => {
        console.error('Error al obtener el proveedor:', error);
      }
    );
  }
 
  

  obtenerProductos(): void {
    this.productosService.getProductos().subscribe(
      productos => {
        this.productos = productos;
      },
      error => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  agregarProducto(): void {
    this.productosService.agregarProducto(this.producto).subscribe(
      response => {
        console.log(response.message);
        this.obtenerProductos();
        this.producto = { id_producto: 0, descripcion: '', proveedor:'', id_proovedor:0, id_categoria: 0, precio_unit: 0, existencias: 0, stock_minimo: 0 };
        // Sumar el precio del producto al total de la venta
     /*  this.totalVenta += this.producto.precio_unit; */
      },
      error => {
        console.error('Error al agregar el producto:', error);
      }
    );
  }

  actualizarProducto(id: number): void {
    this.productosService.actualizarProducto(id, this.producto).subscribe(
      response => {
        console.log(response.message);
        this.obtenerProductos();
        this.producto = { id_producto: 0, descripcion: '', proveedor:'', id_proovedor: 0, id_categoria: 0, precio_unit: 0, existencias: 0, stock_minimo: 0 };
      },
      error => {
        console.error('Error al actualizar el producto:', error);
      }
    );
  }

  eliminarProducto(id: number): void {
    this.productosService.eliminarProducto(id).subscribe(
      response => {
        console.log(response.message);
        this.obtenerProductos();
      },
      error => {
        console.error('Error al eliminar el producto:', error);
      }
    );
  }

  
}



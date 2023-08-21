import {Request,Response}  from 'express';
import pool from '../database';

class ProductosController{
    async getProductos(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_productos');
        res.json(result[0]);
    }

    async getByIdProducto(req:Request,res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_productos WHERE id_producto= ?',[id]);
        if(result.length>0){
            res.json(result[0]);
        }
    }
    
    async createProducto(req:Request,res:Response){
        await pool.query('INSERT INTO tb_productos set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Registro almacenado!'});
    }

    async updateProducto(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE tb_productos set ? WHERE id_producto= ?',[req.body, id]);
        //res.json(result);
        res.json({text:"Registro actualizado!"});
    }

    async deleteProducto(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tb_productos WHERE id_producto= ?',[id]);
        //res.json(result);
        res.json({text:'Registro eliminado'});
    }
}
export const productosController= new ProductosController();
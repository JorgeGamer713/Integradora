import {Request,Response}  from 'express';
import pool from '../database';

class EmpleadosController{
    async getEmpleados(req:Request,res:Response){
        const result= await pool.query('SELECT * FROM tb_usuarios');
        res.json(result[0]);
    }
    async getByIdEmpleado(req:Request,res:Response){
        const {id}= req.params;
        const result= await pool.query('SELECT * FROM tb_usuarios WHERE id_usuario= ?',[id]);
        if(result.length>0){
            res.json(result[0]);
        }
    }
    
    async createEmpleado(req:Request,res:Response){
        await pool.query('INSERT INTO tb_usuarios set ?',[req.body]);
        //res.json(result);
        //console.log(req.body);
        res.json({message:'Registro almacenado!'});
    }

    async updateEmpleado(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE tb_usuarios set ? WHERE id_usuario= ?',[req.body, id]);
        //res.json(result);
        res.json({text:"Registro actualizado!"});
    }

    async deleteEmpleado(req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tb_usuarios WHERE id_usuario= ?',[id]);
        //res.json(result);
        res.json({text:'Registro eliminado'});
    }
}
export const empleadosController= new EmpleadosController();
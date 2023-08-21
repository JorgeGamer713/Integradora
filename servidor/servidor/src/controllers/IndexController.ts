import {Request,Response}  from 'express';
import pool from '../database';

class IndexController{
     saludar(req:Request,res:Response){
        //const rows=  pool.query('SELECT * FROM empleados');
        //res.json(rows[0]);
        res.json({text:'Hola'});
    }
}

export const indexController= new IndexController();

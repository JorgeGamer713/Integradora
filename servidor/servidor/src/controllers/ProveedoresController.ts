import { Request, Response } from 'express';
import pool from '../database';

class ProveedoresController {
  async getProveedores(req: Request, res: Response) {
    const result = await pool.query('SELECT * FROM tb_proveedores');
    res.json(result[0]);
  }

  async getByIdProveedor(req: Request, res: Response) {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM tb_proveedores WHERE id_proovedor = ?', [id]);
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Proveedor no encontrado' });
    }
  }

  async createProveedor(req: Request, res: Response) {
    await pool.query('INSERT INTO tb_proveedores set ?', [req.body]);
    res.json({ message: 'Registro almacenado!' });
  }

  async updateProveedor(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('UPDATE tb_proveedores set ? WHERE id_proovedor = ?', [req.body, id]);
    res.json({ message: 'Registro actualizado!' });
  }

  async deleteProveedor(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('DELETE FROM tb_proveedores WHERE id_proovedor = ?', [id]);
    res.json({ message: 'Registro eliminado' });
  }
}

export const proveedoresController = new ProveedoresController();

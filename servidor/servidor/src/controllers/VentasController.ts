import { Request, Response } from 'express';
import pool from '../database';

class VentasController {
  async getVentas(req: Request, res: Response) {
    const result = await pool.query('SELECT * FROM tb_ventas');
    res.json(result[0]);
  }

  async getByIdVenta(req: Request, res: Response) {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM tb_ventas WHERE id_venta = ?', [id]);
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Venta no encontrada' });
    }
  }

  async createVenta(req: Request, res: Response) {
    await pool.query('INSERT INTO tb_ventas SET ?', [req.body]);
    res.json({ message: 'Registro almacenado!' });
  }

  async updateVenta(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('UPDATE tb_ventas SET ? WHERE id_venta = ?', [req.body, id]);
    res.json({ message: 'Registro actualizado!' });
  }

  async deleteVenta(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('DELETE FROM tb_ventas WHERE id_venta = ?', [id]);
    res.json({ message: 'Registro eliminado' });
  }
}

export const ventasController = new VentasController();

import { Request, Response } from 'express';
import pool from '../database';

class DetalleVentaController {
  async getDetalleVentas(req: Request, res: Response) {
    const result = await pool.query('SELECT * FROM tb_detalle_venta');
    res.json(result[0]);
  }

  async getByIdDetalleVenta(req: Request, res: Response) {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM `tb_detalle_venta` INNER JOIN tb_productos ON tb_detalle_venta.id_producto=tb_productos.id_producto WHERE id_venta=?;', [id]);
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Detalle de venta no encontrado' });
    }
  }

  async createDetalleVenta(req: Request, res: Response) {
    await pool.query('INSERT INTO tb_detalle_venta SET ?', [req.body]);
    res.json({ message: 'Registro almacenado!' });
  }

  async updateDetalleVenta(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('UPDATE tb_detalle_venta SET ? WHERE id_detalle = ?', [req.body, id]);
    res.json({ message: 'Registro actualizado!' });
  }

  async deleteDetalleVenta(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('DELETE FROM tb_detalle_venta WHERE id_detalle = ?', [id]);
    res.json({ message: 'Registro eliminado' });
  }
}

export const detalleVentaController = new DetalleVentaController();

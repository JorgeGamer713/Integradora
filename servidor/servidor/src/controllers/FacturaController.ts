import { Request, Response } from 'express';
import pool from '../database';

class FacturaController {
  async getFacturas(req: Request, res: Response) {
    const result = await pool.query('SELECT * FROM tb_factura');
    res.json(result[0]);
  }

  async getByIdFactura(req: Request, res: Response) {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM tb_factura WHERE id_factura = ?', [id]);
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Factura no encontrada' });
    }
  }

  async createFactura(req: Request, res: Response) {
    await pool.query('INSERT INTO tb_factura SET ?', [req.body]);
    res.json({ message: 'Registro almacenado!' });
  }

  async updateFactura(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('UPDATE tb_factura SET ? WHERE id = ?', [req.body, id]);
    res.json({ message: 'Registro actualizado!' });
  }

  async deleteFactura(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('DELETE FROM tb_factura WHERE id = ?', [id]);
    res.json({ message: 'Registro eliminado' });
  }
}

export const facturaController = new FacturaController();

import { Request, Response } from 'express';
import pool from '../database';

class ClientesController {
  async getClientes(req: Request, res: Response) {
    const result = await pool.query('SELECT * FROM tb_clientes');
    res.json(result[0]);
  }

  async getByIdCliente(req: Request, res: Response) {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM tb_clientes WHERE id_cliente = ?', [id]);
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  }

  async createCliente(req: Request, res: Response) {
    await pool.query('INSERT INTO tb_clientes SET ?', [req.body]);
    res.json({ message: 'Registro almacenado!' });
  }

  async updateCliente(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('UPDATE tb_clientes SET ? WHERE id_cliente = ?', [req.body, id]);
    res.json({ message: 'Registro actualizado!' });
  }

  async deleteCliente(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('DELETE FROM tb_clientes WHERE id_cliente = ?', [id]);
    res.json({ message: 'Registro eliminado' });
  }
}

export const clientesController = new ClientesController();

import { Request, Response } from 'express';
import pool from '../database';

class TiposController {
  async getTipos(req: Request, res: Response) {
    const result = await pool.query('SELECT * FROM tb_tipos');
    res.json(result[0]);
  }

  async getByIdTipo(req: Request, res: Response) {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM tb_tipos WHERE id_tipo = ?', [id]);
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Tipo no encontrado' });
    }
  }

  async createTipo(req: Request, res: Response) {
    await pool.query('INSERT INTO tb_tipos SET ?', [req.body]);
    res.json({ message: 'Registro almacenado!' });
  }

  async updateTipo(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('UPDATE tb_tipos SET ? WHERE id_tipos = ?', [req.body, id]);
    res.json({ message: 'Registro actualizado!' });
  }

  async deleteTipo(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('DELETE FROM tb_tipos WHERE id_tipos = ?', [id]);
    res.json({ message: 'Registro eliminado' });
  }
}

export const tiposController = new TiposController();

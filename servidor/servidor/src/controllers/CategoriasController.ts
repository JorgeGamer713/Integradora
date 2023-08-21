import { Request, Response } from 'express';
import pool from '../database';

class CategoriasController {
  async getCategorias(req: Request, res: Response) {
    const result = await pool.query('SELECT * FROM tb_categorias');
    res.json(result[0]);
  }

  async getByIdCategoria(req: Request, res: Response) {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM tb_categorias WHERE id_categoria = ?', [id]);
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Categoría no encontrada' });
    }
  }

  async createCategoria(req: Request, res: Response) {
    await pool.query('INSERT INTO tb_categorias SET ?', [req.body]);
    res.json({ message: 'Registro almacenado!' });
  }

  async updateCategoria(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('UPDATE tb_categorias SET ? WHERE id_categoria  = ?', [req.body, id]);
    res.json({ message: 'Registro actualizado!' });
  }

  async deleteCategoria(req: Request, res: Response) {
    const { id } = req.params;
    await pool.query('DELETE FROM tb_categorias WHERE id_categoria  = ?', [id]);
    res.json({ message: 'Registro eliminado' });
  }
}

export const categoriasController = new CategoriasController();


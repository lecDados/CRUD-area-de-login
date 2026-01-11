import { Router } from 'express';
import { db } from './db/database';

const router = Router();

// CADASTRO
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  db.run(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    err => {
      if (err) return res.status(400).send('Usuário já existe');
      res.send('Cadastrado');
    }
  );
});

// LOGIN
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get(
    'SELECT id, username FROM users WHERE username=? AND password=?',
    [username, password],
    (err, row) => {
      if (!row) return res.status(401).send('Inválido');
      res.json(row);
    }
  );
});


// DELETE (apenas próprio usuário)
router.delete('/delete', (req, res) => {
  const { id } = req.body;
  db.run('DELETE FROM users WHERE id=?', id, () => {
    res.send('Deletado');
  });
});
router.get('/health', (_req, res) => {
  res.json({ status: 'ok', time: Date.now() });
});


export default router;

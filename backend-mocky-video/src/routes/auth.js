const express = require('express');
const router = express.Router();
const authService = require('../services/authService');

// Rota para login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Lógica de autenticação
    const result = await authService.authenticateUser(email, password);

    if (result.success) {
      res.status(200).json({ message: 'Login bem-sucedido', token: result.token });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor', error });
  }
});

module.exports = router;

const jwt = require("jsonwebtoken");

// Simulando um banco de dados de usuários
const users = [
  {
    id: 1,
    email: "teste@teste.com",
    password: "123456",
  },
];

// Função para autenticar o usuário
async function authenticateUser(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    // Gerar um token JWT para autenticação
    const token = jwt.sign({ id: user.id, email: user.email }, "secreta", {
      expiresIn: "1h", 
    });
    return { success: true, token };
  }

  return { success: false };
}

module.exports = { authenticateUser };

const express = require('express');
const cors = require('cors');
const LoginRoutes = require('./src/routes/loginRoutes');

// Configurações do servidor
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/login', LoginRoutes);

// Start o server
app.listen(PORT, () => {
  console.log(`Servidor esta rodando na porta ${PORT}`);
});



console.log('1️⃣ Iniciando');

process.on('uncaughtException', err => {
  console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', reason => {
  console.error('❌ Unhandled Rejection:', reason);
});

const express = require('express');
console.log('2️⃣ Express importado');

const routes = require('./routes').default;
console.log('3️⃣ Rotas importadas');

const app = express();
console.log('4️⃣ App criado');

app.use(express.json());
app.use(express.static('public'));
app.use(routes);

app.use((req, _res, next) => {
  console.log('➡️ Requisição:', req.method, req.url);
  next();
});

app.listen(3000, () => {
  console.log('5️⃣ Servidor rodando em http://localhost:3000');
});

const http = require('http');

http.createServer((req, res) => {
  res.end('HTTP puro OK');
}).listen(4000, () => {
  console.log('HTTP puro em http://localhost:4000');
});


console.log('6️⃣ Fim do arquivo');

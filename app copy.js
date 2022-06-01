// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Definicao de endereco / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementacao da regra de negocio
const server = http.createServer((req, res) => {

// pegar a pergunta na url
const params = queryString.parse(url.parse(req.url, true).search);

// Verificar a pergunta e escolher uma resposta
let resposta;

if(params.pergunta == 'melhor-filme') {

  resposta = 'star wars';
} 
if(params.pergunta == 'melhor-tecnologia-backend') {

  resposta = 'nodejs';
} 
else {
  
  resposta = 'nao sei, desculpe :(';
}
//  Retornar a resposta escolhida

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

// Execucao
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// http://127.0.0.1:3000/?pergunta=melhor-filme
const express = require('express');
/* Chama a função express para instanciar a aplicação do framework
   e armazenar na variável app para ser utilizada no código */
const app = express();

/* Ouve por requisições, utilizando o método GET, no caminho '/' */
app
  .route('/')  
  .get(function (req, res) {
    res.send('hello world get');
  })
  .post(function (req, res) {
    res.send('hello world post');
  });

  app.get(
    '/ping',
    function (req, res, next) {
      console.log('fiz alguma coisa');
      /* Chama a próxima callback */
      next();
    },
    function (req, res) {
      /* A segunda (e última) callback envia a resposta para o cliente */
      res.send('pong!');
    }
  );
  
  /* Também podemos utilizar um array para especificar múltiplos callbacks */
  app.get('/hello', [
    (req, res, next) => {
      console.log('primeiro callback acionado');
      next();
    },
    (req, res, next) => {
      console.log('segundo callback acionado');
      res.send('Hello, world!');
    },
  ]);

  app.get('/teste', [
    (req, res) => {
      res.send('Testando, som!');
    },
    (req, res) => {
      console.log('Tão me ouvindo?');
    },
  ]);

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});


// const express = require('express');
// const simpsons = require('./simpsons');

// const app = express();

// /* Todas as rotas com /simpsons/<alguma-coisa> entram aqui e vão para o roteador. */
// app.use('/simpsons', simpsons);

// app.listen(3000);



// const express = require('express');
// const rescue = require('express-rescue');
// const fs = require('fs').promises;

// const app = express();

// app.get('/:fileName', rescue(async (req, res) => {
//   const file = await fs.readFile(`./${req.params.fileName}`);
//   res.send(file.toString('utf-8'));
// }));


// app.use((err, req, res, next) => {
//   res.status(500).json({ error: `Erro: ${err.message}`})
// })

// app.listen(3000);
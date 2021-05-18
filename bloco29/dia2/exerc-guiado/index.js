const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
// const MESSAGE = process.env.MESSAGE || 'vamo que vamo'

app.get('/', (req, res) => {
  res.send('vamo que vamo')
});

app.listen(PORT);
console.log(`Escutando na porta ${PORT}`);
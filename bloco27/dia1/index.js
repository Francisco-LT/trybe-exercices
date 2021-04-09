const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/author');
const Author1 = require('./controllers/mongoauthor');

const app = express();

app.use(bodyParser.json());

// app.get('/authors', async (_req, res) => {
//   const authors = await Author.getAll();

//   res.status(200).json(authors);
// });

// app.get('/authors/:id', async (req, res) => {
//   const { id } = req.params;
  
//   const author = await Author.findById(id);
  
//   if (!author) return res.status(404).json({ message: 'Not found' });
  
//   res.status(200).json(author);
//   });

app.get('/authors', Author1.getAll);

app.get('/authors/:id', Author1.findById);

app.post('/authors', Author1.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
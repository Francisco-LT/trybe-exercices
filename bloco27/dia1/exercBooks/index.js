const express = require('express');
const app = express();

app.use(express.json())

const Book = require('./models/Books')
const BookMongo = require('./models/Booksmongo')

app.get('/books', async (req, res) => {
  // Obtém o ID do autor da query string
  const { author_id } = req.query;

  const books = (author_id)
  // Caso o ID tenha sido informado, busca livros daquele autor
  ? await Book.getByAuthorId(author_id)
  // Caso o ID não tenha sido infomado, busca todos os livros
  : await Book.getAll();

  // Agora, com os resultados em mão, enviamos o status http e os resultados.
  res.status(200).json(books);
});

// app.get('/books', async (req, res) => {
//   const { author_id } = req.query;
//   const books = (author_id)
//   ? await BookMongo.getByAuthorId(books)
//   : await BookMongo.getAll();
//   res.status(200).json(books);
// });

app.get('/books/:id', async (req, res) => {
  // Extraímos o id da URL
  const { id } = req.params;

  // Pedimos para o model buscar um livro com esse ID.
  const book = await Book.getById(id);

  // Caso o retorno seja null, ou seja, o livro não existe
  // Retornamos o status 404 Not Found, e uma mensagem de erro
  if (!book) return res.status(404).json({ message: 'Book not found' })

  // Caso tenhamos encontrado um livro, retornamos o status 200 OK
  // E o livro encontrado.
  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  // Extraímos title e author_id do corpo da requisição
  const { title, author_id } = req.body;
  
  // Caso o livro não seja válido
  if (!await Book.isValid(title, author_id)) {
    // Devolvemos o status 400 Bad Request, com a mensagem "Dados Inválidos"
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  
  // Caso o livro seja válido, pedimos ao model para criá-lo no banco de dados.
  await Book.create(title, author_id);
  
  // Após criar o livro, devolvemos o status 201 Created, e uma mensasgem informando o sucesso
  // da operação
  res.status(201).json({ message: 'Livro criado com sucesso! '});
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
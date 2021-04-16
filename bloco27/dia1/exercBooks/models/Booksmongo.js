const connection = require('./mongoconnection');

const getAll = () => connection()
// Realizamos o `find` de forma muito parecida com o que fazemos no mongo shell,
// mas, ao invés de `db.books.find`, fazemos `db.collection('books').find`.
.then((db) => db.collection('books').find({}).toArray())

const getByAuthorId = (authorId) => connection()
// Novamente, temos um `find` simples, dessa vez utilizando um filtro por ID do autor
.then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray())

module.exports = {
  getAll,
  getByAuthorId,
}
const connection = require("../connect")

const getAll = async () => {
  const [artista] = await connection.execute('SELECT * FROM artista');
  console.log(artista)
};

const create = async (nome) => {
  await connection.execute('INSERT INTO artista (nome) VALUES (?)', [nome])
}

module.exports = {
  getAll,
  create,
};
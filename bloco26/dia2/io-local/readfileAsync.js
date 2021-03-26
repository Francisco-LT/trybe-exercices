const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';
function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}

readFilePromise('./meu-arquivo.txt')
  .then((content) => {
    console.log(`Lido arquivo com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivo: ${err.message}`);
  });
  

  const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';
function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}

readFilePromise('./meu-arquivo.txt')

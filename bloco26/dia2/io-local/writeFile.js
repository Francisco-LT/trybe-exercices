// const fs = require('fs');

// fs.writeFile('./meu-arquivo.txt', 'Meu textão', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Arquivo salvo');
// });

const fs = require('fs');

fs.writeFile('./meu-novo-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' }, function (err) {
  // A flag wx abre o arquivo para escrita caso ele não exista
  /*
    Flag =>
      w: write
      x: exclusive
  */
  // Se o arquivo existir, um erro é retornado
  if (err) throw err;
  console.log('Arquivo salvo');
});

// const fs = require('fs');

// function readFilePromise (fileName) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, content) => {
//       if (err) return reject(err);
//       resolve(content);
//     });
//   });
// }

// Promise.all([
//   readFilePromise('file1.txt'),
//   readFilePromise('file2.txt'),
//   readFilePromise('file3.txt')
// ])
// .then(([file1, file2, file3]) => {
//   const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
//   console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
// })
// .catch((err) => {
//   console.error(`Erro ao ler arquivos: ${err.message}`);
// })
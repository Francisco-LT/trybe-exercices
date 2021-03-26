// function promise(a, b, c) {
//   return new Promise((resolve, reject) => {
  
//     if (typeof(a) !== "number" || typeof(b) !== "number"  || typeof(c) !== "number" ) {
//       return reject(new Error('Informe apenas números'));
//     }

//     const result = (a + b) * c;

// if (result < 50) {
//   return reject(new Error('Valor muito baixo'));
// }

// resolve(console.log(result));
// });
// }

// const par4 = (Math.floor(Math.random() * 100))

// promise(par4, par4, par4)
//   .then((content) => {
//     console.log(content);
//   })
//   .catch((err) => {
//     console.error(`Erro ao ler arquivo: ${err.message}`);
//   });



    async function callDoMath() {
    //   /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
      const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

    try {
          const result = await doMath(...randomNumbers);
          console.log(result);
          } catch (err) {
            console.error(err);
          }
        }
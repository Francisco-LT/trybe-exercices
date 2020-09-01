let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroImpar = 0

//Nesse caso, a cada resultado impar encontrado dentro do array, o numeroImpar recebia +1 em seu valor
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        numeroImpar += 1
    }
}

if (numeroImpar === 0) {
    console.log('nenhum valor ímpar encontrado');
  } else {
    console.log(numeroImpar);
  }
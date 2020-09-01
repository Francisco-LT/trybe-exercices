let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;
//Nesse exericio usamos o if para encontar o maior número
//Como o higherNumber começa como zero, ele vai ser menor que qualquer um do meu array
//E o valor de higher number vai sempre sendo trocado por um maior que o seu
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > higherNumber) {
          higherNumber = numbers[i];
        }
      }
      console.log(higherNumber);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerNumber = 100;
//Nesse exericio usamos o if para encontar o menor número
//Como o loweNumber começa como 100, ele vai ser maior que qualquer um do meu array
//E o valor de lowernumber vai sempre sendo trocado por um menor que o seu
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] < lowerNumber) {
          lowerNumber = numbers[i];
        }
      }
      console.log(lowerNumber);
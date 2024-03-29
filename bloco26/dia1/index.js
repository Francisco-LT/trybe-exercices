// const readline = require('readline-sync');


// function calculaImc () {
//   const peso = readline.questionFloat('Qual o seu peso (kg)? ').toFixed(2);
//   const altura = readline.questionFloat('Qual sua altura (m)? ').toFixed(2);

//   console.log('Peso: %s, altura: %s', peso, altura);

//   const imc = (peso / Math.pow(altura, 2)).toFixed(2);

//   if(imc < 18.5) {
//     console.log("magro");
//   } else if (imc >= 18.5 && imc < 25 ) { 
//     console.log("peso normal");
//     return;
//   } else if (imc >= 25 && imc < 29.9) {
//     console.log("sobrepeso");
//     return;
//   } else if (imc >= 30 && imc < 34.9) {
//     console.log("	Obesidade grau I");
//     return;
//   } else if (imc >= 35 && imc < 39.9) {
//     console.log("	Obesidade grau II");
//     return;
//   } else {
//     console.log("Obesidade graus III e IV")
//     return;
//   }
// }

// calculaImc();

const inquirer = require('inquirer');

function validateFloat (input) {
  return !isNaN(parseFloat(input)) || 'Por favor, digite um número válido';
}

async function calculaImc () {
  const answers = await inquirer.prompt([
    { name: 'peso', type: 'input', message: 'Qual o seu peso (kg)?', validate: validateFloat },
    { name: 'altura', type: 'input', message: 'Qual a sua altura (m)?', validate: validateFloat }
  ]);

  const peso = parseFloat(answers.peso);
  const altura = parseFloat(answers.altura);

  console.log('Peso: %s, altura: %s', peso, altura);

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log('IMC: %s', imc);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
}

calculaImc();
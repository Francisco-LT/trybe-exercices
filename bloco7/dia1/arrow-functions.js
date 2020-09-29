
// Função normal
function sum(value1, value2) {
  return value1 + value2;
}

// Arrow function
// 1. Ela é uma função anonima. Ou seja, não tem nome
// 2. Não precisamos utilizar a palavra chave function
// 3. Ela tem a seta entre os parametros e o começo do escopo
const sum2 = (value1, value2) => {
  return value1 + value2;
}

// Particularidades da Arrow Function:
// 1. Se a função não tiver (parametros), não precisamos colocar os (). Podem ser ignorados
const logName = () => {
  console.log("Mateus Leite");
}

// 2. Se a função tem apenas 1 linha, não precisamos colocar o escopo de forma explicita. { }
const greetings = (name) => console.log("Greetings, " + name);

// 3. Se a função tem apenas 1 parametro, eu não preciso colocar o parametro entre ()
const saudacoes = nome => console.log("Saudacoes, " + nome);

// 4. Se a função tem apenas 1 linha e retorna algo, eu nao preciso utilizar a palavra chave return se eu remover os { }
const returnSummedValue = (value1, value2) => value1 + value2;

console.log(returnSummedValue(1, 2));

saudacoes("Brune");

greetings("Alvaro");

logName();

console.log(sum2(5, 4));


const button = document.querySelector("#button");
const otherButton = document.querySelector("#otherButton");

const eventHandler = (event) => {
 //...
}

button.addEventListener("click", eventHandler);
otherButton.addEventListener("click", eventHandler);

const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click", (event) => {
  // acoes de login...
}); 
// declaramos quatro variáveis que usaremos no código
let n = 5;
let lineIndex;
let symbol = '*';
let inputLine = '';
//usamos o primeiro for para fazer a pirâmide, no primeiro loop será colocado somente um asterisco, no segundo será adicionado um, e assim por diante.
for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
//nesse segundo caso, ele imprimi o imputLine 5 vezes com o resultado final que foi encontrado no último for
for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};
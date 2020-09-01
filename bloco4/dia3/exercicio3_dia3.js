
let n = 5;
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    // dentro do if é comparado o columnIndex que começa sem ser definido com o InputPosition que começa com o valor de n no caso 5
    //isso acontece 4 vezes, até que o columnIndex vira 5, assim é igual ao inputPosition e assim é adicionado um asterisco
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}
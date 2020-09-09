//nesse exercício é comparado o valor do número, mas o resultado é a posição do número no array
function maiorNumero (numerosInteiros) {
let maiorNumero = 0;
for (let indice in numerosInteiros) {
    //dentro do if, é comparado númerosInteiros na posição maiorNumero, que no caso é a posição zero do array
    //como a posição numerosInteiros na posição indice, que começa como a posição zero, mas o contador vai modificando e vai realziando a comparação que precisa,os para encontrar omaior númeor do array
    if (numerosInteiros[maiorNumero] < numerosInteiros[indice]) {
        maiorNumero = indice;
    }
}
return maiorNumero;
}
console.log(maiorNumero([2, 3, 6, 7, 10, 1]));
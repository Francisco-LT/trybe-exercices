//nesse exercício é comparado o valor do número, mas o resultado é a posição do número no array
function menorNumero (numerosInteiros) {
    let menorNumero = 0;
    for (let indice in numerosInteiros) {
        //dentro do if, é comparado númerosInteiros na posição menorNumero, que no caso é a posição zero do array
        //como a posição numerosInteiros na posição indice, que começa como a posição zero, mas o contador vai modificando e vai realziando a comparação que precisa,os para encontrar o mmenor númeor do array
        if (numerosInteiros[menorNumero] > numerosInteiros[indice]) {
            menorNumero = indice;
        }
    }
    return menorNumero;
    }
    console.log(menorNumero([2, 4, 6, 7, 10, 0, -3]));
// o exercicio pode ser resolvido das duas maneiras abaixo

function verificarPalindromo (palavra) {
    //primeiramente usamos o .split, que transforma uma string em um array de letras e no fim escolhemos o que vai separae essas letras;
    let arrayDeLetras = palavra.split("");
    let ehPalindromo = true;
    for (let index in arrayDeLetras) {
        //array de letras no caso é a palavra qu escolhemos, serão comparadas letra por letra (ao contrário, a primeira, com a última, a segunda com a penúltima e assim por diante) para entender se é ou não um palíndromo
        if (arrayDeLetras[index] != palavra[(palavra.length - 1) - index]) {
            ehPalindromo = false;
        }
    }
    return ehPalindromo;
}

function verificarPalindromo(string) {
    //nese ponto ele pega string, separa transformando em um array, separa novamente, reverte a ordem das letras e junta novamente.
    let reverse = string.split("").reverse().join("");
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
}
console.log(verificarPalindromo('salas')); 
console.log(verificarPalindromo("socorrammesubinoonibusemmarrocos")); 
   

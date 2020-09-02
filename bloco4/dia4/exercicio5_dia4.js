function maiorNome(nomes) {
    //igualamos maior nome com nomes na posição 0 (no caso José);
    let maiorNome = nomes[0];
    for (let indice in nomes) {
        //dentro do if, se o número de letras de maior nome, menor que número de letras de nomes, igulamos.
        //na primeira situaão é a mesma, mas na segunda o contador muda nomes de José para Lucas, aí a comparação começa a funcionar
        if (maiorNome.length < nomes.length) {
            maiorNome = nomes[indice];
        }
    }
    return maiorNome;
    }
    console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
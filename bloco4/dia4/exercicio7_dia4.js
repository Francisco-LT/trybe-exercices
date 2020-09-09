function somaDosNumeros (numerosInteiros) {
    let total = 0;
    for (let index = 0; index <= numerosInteiros; index += 1) {
            total = total + index
        }
    return total;
    }
    console.log(somaDosNumeros(5));
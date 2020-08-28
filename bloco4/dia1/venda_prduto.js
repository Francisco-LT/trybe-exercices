let custo = 10;
let venda = 20
let imposto = (custo * 0.2);
let custoTotal = (custo + imposto);
let lucro = (venda - custoTotal);
let lucroTotal = (1000 * lucro);
if (custo <=0 || venda <= 0) {
    console.log("Você vai tomar prejuízo seu doido!!")
} else {
    console.log(lucroTotal)
}

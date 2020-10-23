const promise = new Promise((resolve, reject) => {
  // Promise é um construtor
  // Um construtor não é nada mais do que uma função especial que cria um objeto a partir de uma classe.  
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(number);
    // nesse caso o return entra para parar a execução, dessa forma o else não é necessário
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
// caso o número seja algo entre 5 e 10, o resolve retorna o número que é passado para o primeiro .then() como number.
// ele retorna a frase acima que é passado como argumento para o segundo .then()
.then(msg => console.log(msg))
// o then está em cadeia, esta função é o retorno da anterior
// assim ele fazo console log da mensagem do primeiro then
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));
// o cathch está ligado com o reject, assim como o then com o resolve
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*const addChave = function (obj, key, value) {
  obj[key] = value; que é a mesma coisa que a arrow function abaixo
}*/

/*const addChave = (obj, key, value) => {
  obj[key] = value;
};
addChave(lesson2, 'turno', 'manhã');
console.log(lesson2) que ainda pode ser diminuida para a função a seguir*/

const addChave = (obj, key, value) => obj[key] = value;
addChave(lesson2, 'turno', 'manhã');
console.log(lesson2)

/*const listKeys = function (obj) {
  return Object.keys(obj);
};
  console.log(listKeys(lesson1)); essa função pode ser diminuida pra funcção a seguir*/

  /*const listKeys = (obj) => {
    return Object.keys(obj);
  };
    console.log(listKeys(lesson1)); que ainda pode ser diminuida para a função a seguir*/

const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

/*const objSize = function (obj) {
  return Object.keys(obj).length;
}
console.log(objSize(lesson3)); pode ser alterada para a função abaixo*/

/*const objSize = (obj) => {
  return Object.keys(obj).length;
}
console.log(objSize(lesson3)); que ainda pode ser alterada para a função abaixo*/

const objSize = (obj) => Object.keys(obj).length;
console.log(objSize(lesson3));

/*const objValue = function (obj) {
  return Object.values(obj);
}
console.log(objValue(lesson1)) pode ser reduzida para a função abaixo;*/

/*const objValue = (obj) => {
  return Object.values(obj);
}
console.log(objValue(lesson1)) que ainda pode ser reduzida para a forma a baixo*/

const objValue = (obj) => Object.values(obj);
console.log(objValue(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

/*const getNumberOfStudents = function (obj) {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));*/

const getNumberOfStudents = (obj) => {
  let total = 0; //nesse caso precisa ser let pois o valor de let pode ser alterado, o de const nunca
  const array = Object.keys(obj); // aqui estamos chamando o nome da nossa key
  for (let i = 0; i < array.length; i += 1) { // aqui estamos percorrendo todas as nossas keys, també não pode ser const pelo mesmo motivo
    total += obj[array[i]].numeroEstudantes; //lembrando que poderiamos substituir .numeroEstudantes por ['numeroEstudantes'], aqui é feita a soma sempre que se acha a key numeroEstudantes
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

/*const getValueByNuber = function(obj, number) { //são dados dois parâmetros
  return Object.values(obj)[number] // pedimos para retornar o valor dde um objeto em determinada posição
}
console.log(getValueByNuber(lesson1, 2));*/

const getValueByNuber = (obj, number) =>  Object.values(obj)[number]; /*são dados dois parâmetros e pedimos para retornar o valor dde um objeto em determinada posição*/
console.log(getValueByNuber(lesson1, 2));

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj); // aqui estamos criando um array que retorna o key e o value
  let isEqual = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) isEqual = true; //aqui verificamos se o key na posição i relamente é um key (tem que estar na posição 0) o o mesmo para o value( tem que estar na posição 1)
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
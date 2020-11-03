const toUpperCase = (str) => {
  const goBig = str.toUpperCase();
  return goBig;
}

const returnFistLetter = (str) => {
  const word = str.split("");
  return word[0]
}

const concatStrings = (str1, str2) => {
  const concatenate = str1.concat(str2);
  return concatenate
}

module.exports = { toUpperCase, returnFistLetter, concatStrings}
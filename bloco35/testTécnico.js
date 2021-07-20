// const verifySum = (arr, int) => {
//     if (arr.length === 0 || typeof int !== 'number') {
//         return false
//     }
//     let newArr = []
//     for (let i = 0; i < arr.length; i += 1) {
//         for (let j = 0; j < arr.length; j+=1) {
//             if (arr[i] + arr[j] === int && arr[i] !== arr[j])
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(verifySum([3, 5, -4, 8, 11, -1, 6], 10))

const verifyClass = (heightBlack, heightOrange) => {
    const isNegative = (class1, class2) => {
      for (let i = 0; i < class1.length; i++) {
        if (class1[i] < 0 || typeof class1[i] !== "number") {
          return false;
        }
      }
      for (let i = 0; i < class2.length; i++) {
        if (class2[i] < 0 || typeof class2[i] !== "number") {
          return false;
        }
      }
      return true;
    };
    if (
      heightOrange.length === heightBlack.length &&
      isNegative(heightBlack, heightOrange)
    ) {
      return true;
    }
    return false;
  };
  
  console.log(verifyClass([150, 179, 149, 2], [162, 181, 151]))
  
  // const arr = [0, 1, 2, 3, 4]
  
  // const magic = arr.reduce((acumulador, valorAtual, index, array) => {
  //     return acumulador + valorAtual;
  //   });
  
  // console.log(magic)
  // const code = (str) => {
  //     const getBigger = str.toUpperCase();
  //     const splitString = getBigger.split('');
      // const countItens = splitString.reduce(function( object , item ){
      //     if ( !object[item] ) {
      //        object[item]=1;
      //     } else {
      //        object[item]++;
      //     }
      //     return object; 
      //   },{})
  //       const keys = Object.keys(countItens)
  //       const values =  Object.values(countItens)
  //       let newArr = []
  //       for (let i = 0; i < keys.length; i ++) {
  //           newArr.push(keys[i].concat(values[i]))
  //       }
  //       const joinArr = newArr.join('')
  //       return joinArr
  // }
  
  // console.log(code('babcasdasdaaaaa@@@@@'))
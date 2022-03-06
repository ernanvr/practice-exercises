const numbersToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//   const element = numbersToTen[index];
//   sum = sum + element;
// }

// console.log('for loop result: ', sum);

// const result = numbersToTen.reduce(function (sum, element) {
//   return sum+element;
// }, 0)

const result = numbersToTen.reduce((sum, element)  => sum+element, 0)

console.log('reduce function: ',result);
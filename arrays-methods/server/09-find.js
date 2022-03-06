 const numbers = [];
 for (let index = 0; index < 30; index++) {
  let randomNumber = Math.floor(Math.random() * 51);
  numbers.push(randomNumber);
 }

 console.log(numbers);

 let response = undefined;
 for (let index = 0; index < numbers.length; index++) {
   const element = numbers[index];
   if (element === 30) {
     response = element;
     break;
   }
 }

console.log('number found? ', response);

const products = [
  { id: 1, description: 'pizza', price: 8.99 },
  { id: 2, description: 'burger', price: 4.99 },
  { id: 3, description: 'french potatoes', price: 0.99 },
  { id: 4, description: 'pupusas', price: 0.99 },
  { id: 5, description: 'lemonade', price: 0.99 },
  { id: 6, description: 'horchata', price: 1.99 },
  { id: 7, description: 'lasagna', price: 7.99 },
  { id: 8, description: 'toaster', price: 4.99 },
];

const response2 = products.find(product => product.description === 'lasagna');//if not found response = undefined
const response3 = products.findIndex(product => product.description === 'lasagna'); // if not found response = -1

console.log('product found? ', response2);
console.log('product index found? ', response3);
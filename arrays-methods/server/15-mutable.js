const products = [
    { title: 'Pizza', price: 121, icon: '🍕', id: 1 },
    { title: 'Burger', price: 121, icon: '🍔', id: 2 },
    { title: 'Hot cakes', price: 121, icon: '🥞', id: 3 },
];

const myProducts = [];
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

const productIndex = products.findIndex( product => product.title === 'Pizza');
let productsV2;
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  productsV2 = products.filter(product => product.title !== 'Pizza');
}

// console.log("products ", products);
// console.log("products version 2 ", productsV2);
// console.log("myProducts ", myProducts);
// console.log("-".repeat(10));

//updating
// const update = {
//   id: 2,
//   changes: {
//     price: 200,
//     description: 'delicious burger'
//   }
// };

// const productIndex2 = productsV2.findIndex( product => product.id === update.id);
// if (productIndex2 !== -1) {
//   productsV2[productIndex2] = { 
//     ...productsV2[productIndex2], 
//     ...update.changes
//    }
// }

// console.log("products ", products);
// console.log("products version 2 ", productsV2);
// console.log("myProducts ", myProducts);
// console.log("-".repeat(10));

const update = {
  id: 2,
  changes: {
    price: 200,
    description: 'delicious burger'
  }
};

const productIndex2 = productsV2.findIndex( product => product.id === update.id);
let productsV3 = [];
if (productIndex2 !== -1) {
  productsV3 = productsV2.map( product => {
    if (product.id === update.id) {
      return {
        ...product,
        ...update.changes
      }
    } else {
      return { ...product }
    }
  } )
}

console.log("products ", products);
console.log("products version 2 ", productsV2);
console.log("products version 3 ", productsV3);
console.log("myProducts ", myProducts);
console.log("-".repeat(10));

//OUTPUT =========>
// products  [
//   { title: 'Pizza', price: 121, icon: '🍕', id: 1 },
//   { title: 'Burger', price: 121, icon: '🍔', id: 2 },
//   { title: 'Hot cakes', price: 121, icon: '🥞', id: 3 }
// ]
// products version 2  [
//   { title: 'Burger', price: 121, icon: '🍔', id: 2 },
//   { title: 'Hot cakes', price: 121, icon: '🥞', id: 3 }
// ]
// products version 3  [
//   {
//     title: 'Burger',
//     price: 200,
//     icon: '🍔',
//     id: 2,
//     description: 'delicious burger'
//   },
//   { title: 'Hot cakes', price: 121, icon: '🥞', id: 3 }
// ]
// myProducts  [ { title: 'Pizza', price: 121, icon: '🍕', id: 1 } ]
// ----------
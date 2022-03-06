const originalArray = ['fanta', 'coca cola', 'sprite', 'mirinda', 'uva'];
const newArray = [];

for (let index = 0; index < originalArray.length; index++) {
  const item = originalArray[index];
  if (item.length > 6) {
    newArray.push(item);
  }
}

console.log('original array: ', originalArray);
console.log('new array: ', newArray);

const filteredArray = originalArray.filter(item => item.length > 6);

console.log('original array: ', originalArray);
console.log('filtered array: ', filteredArray);

const orders = [ 
  {
    customerName: 'John',
    totalPrice: 60,
    deliveryDate: '',
    delivered: false
  },
  {
    customerName: 'Peter',
    totalPrice: 120,
    deliveryDate: '1/2/2022',
    delivered: true

  },
  {
    customerName: 'Mike',
    totalPrice: 30,
    deliveryDate: '1/2/2022',
    delivered: true
  }
 ]
 
//  const filteredOrders = orders.filter(order => order.delivered && order.totalPrice > 100);
//  console.log(orders);
//  console.log('====================================');
//  console.log(filteredOrders);
//  console.log('====================================');


 const search = (query) => {
   return orders.filter(item => {
     return item.customerName.includes( query );
   })
 }

 console.log('====================================');
 console.log(search('Mik'));
 console.log('====================================');
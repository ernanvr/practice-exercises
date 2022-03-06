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
 
 const onlyTotalOrders = orders.map( order => order.totalPrice);

console.log('original ' + orders);
console.log('new ' + onlyTotalOrders);

const ordersWithTaxes = orders.map( order => {
  const { totalPrice } = order;
  return {
    ...order,
    tax: totalPrice*0.13
  }
} );

console.log('original ' + orders);
console.log('new ' + ordersWithTaxes);
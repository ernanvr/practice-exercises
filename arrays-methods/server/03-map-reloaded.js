const orders = [ 
  {
    customerName: 'John',
    totalPrice: 60,
    delivered: '1/2/2022'
  },
  {
    customerName: 'Peter',
    totalPrice: 120,
    delivered: '1/2/2022'
  },
  {
    customerName: 'Mike',
    totalPrice: 30,
    delivered: '1/2/2022'
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
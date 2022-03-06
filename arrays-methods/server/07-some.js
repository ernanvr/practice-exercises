const numbers = [1, 2, 3, 5];

let response = false;
for (let index = 0; index < numbers.length; index++) {
  const item = numbers[index];
  if (item % 2 === 0) {
    response = true;
    break;
  }
}

console.log(response);

const result = numbers.some( number => number % 2 === 0 );
console.log(result);

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
 ];

 const isDelivered = orders.some( order => order.delivered);
 console.log('At least one Order has been delivered? ',isDelivered);

 var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

 const dates = [
   { start: new Date(2022, 3, 7, 10), end: new Date(2022, 3, 7, 11), task: 'meeting Aguila project'},
   { start: new Date(2022, 3, 7, 13), end: new Date(2022, 3, 7, 14), task: 'meeting supplier GLC'},
   { start: new Date(2022, 3, 7, 18), end: new Date(2022, 3, 7, 19), task: 'dinner with Nelly'},
 ];

const newAppointment = { 
  start: new Date(2022, 3, 7, 10), 
  end: new Date(2022, 3, 7, 11)
}

const isOverlapped = (newDate) => {
  return dates.some(date => areIntervalsOverlapping(
      { start: date.start, end: date.end},//calendar
      { start: newDate.start, end: newDate.end } // new appointment
    )
  )
}

console.log(isOverlapped(newAppointment));
const myArray = [1, 2, 3, 4, 3, 1, 1, 1];

const response = myArray.reduce( ( obj, item ) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item]++;
  }
  return obj;
}, {})

console.log(response);

const players = [ 
  { name: 'Ernan', level: 'high' },
  { name: 'Juan', level: 'medium' },
  { name: 'Zuleyma', level: 'low' },
  { name: 'Julia', level: 'medium' },
  { name: 'Monik', level: 'low' },
  { name: 'Jhon', level: 'low' },
 ];

 const highPlayers = players
 .map( ( { level } ) => level )
 .reduce( (obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item]++;
  }
  return obj;
 }, {})

 console.log(highPlayers);

 //challenge

 const array2 = [];
 for (let index = 0; index < 30; index++) {
  let randomNumber = Math.floor(Math.random() * 50);
  array2.push(randomNumber);
 }

 const ranges = {
   '0-9': 0,
   '10-19': 0,
   '20-29': 0,
   '30+': 0
 }

 const result = array2.reduce( ( obj, number ) => {
   if (number < 10) {
     obj['0-9']++;
   } else if (number < 20) {
     obj['10-19']++;
   } else if (number < 30) {
     obj['20-29']++;
   } else {
     obj['30+']++;
   }
   return obj;
 }, ranges);

 console.log(result);
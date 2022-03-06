 const myArray = [];
 for (let index = 0; index < 30; index++) {
  let randomNumber = Math.floor(Math.random() * 51);
  myArray.push(randomNumber);
 }

 console.log(myArray);

 let validation = true;
 for (let index = 0; index < myArray.length; index++) {
   const element = myArray[index];
   if (element >= 50) {
     validation = false;
   }
 }

 console.log('Numbers lower than 50? (validated with For loop) ', validation);

 const validation2 = myArray.every( number => number < 50 );

 console.log('Numbers lower than 50? (validated with Every array method) ', validation2);

 //challenge

 const team = [
   { name: 'Juan', age: 10 },
   { name: 'Moises', age: 15 },
   { name: 'Pedro', age: 10 },
   { name: 'Alex', age: 12 },
   { name: 'Alejandro', age: 14 },
   { name: 'Rosa', age: 15 },
   { name: 'Gisel', age: 13 },
   { name: 'Manuel', age: 9 },
 ];

//  const teamIsOk = team.every(function (person) {
//    return person.age <= 15;
//  })

 const teamIsOk = team.every( person =>  person.age <= 15 );

console.log('All team members are 15 or younger? ', teamIsOk);
const matrix = [ 
  [1,2,3,[1,2,3,[1,2,3]]],
  [4,5,6,[2,[3,[4,[9,[2,[4]]]]]]],
  [7,8,9]
 ];

 const newArray = [];
 for (let i = 0; i < matrix.length; i++) {
   const element = matrix[i];
   newArray.push(...element);
 }

//  console.log(newArray);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

 const response2 = matrix.flat();

//  console.log(response2);

 function myFlatFunction(array) {
   const finalArray = [];
   for (let i = 0; i < array.length; i++) {
     const item = array[i];
     if (item instanceof Array) {
      finalArray.push(...myFlatFunction(item));
     } else {
       finalArray.push(item);
     }
   }
     return finalArray;
 }

 const response3 = myFlatFunction(matrix);

 console.log(response3);//[ 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6, 2, 3, 4, 9, 2, 4, 7, 8, 9 ]
//inmutable
const elements = [1,1,2,2];
const others = [3,3,4,4, 'random'];

const newArray = [...elements];

for (let index = 0; index < others.length; index++) {
  const item = others[index];
  newArray.push(item);
}
console.log(newArray);//[ 1, 1, 2, 2, 3, 3, 4, 4, 'random' ]
const newArray2 = elements.concat(others);
console.log(newArray2);//[ 1, 1, 2, 2, 3, 3, 4, 4, 'random' ]

const newArray3 = [...elements, ...others];
console.log(newArray3);//[ 1, 1, 2, 2, 3, 3, 4, 4, 'random' ]


//mute elements
elements.push(...others);
console.log(elements);//[ 1, 1, 2, 2, 3, 3, 4, 4, 'random' ]
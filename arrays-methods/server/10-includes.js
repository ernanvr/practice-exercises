const pets = [ 'cat', 'dog', 'hamster', 'duck' ];

let petIsIncluded = false;
const objective = 'snake';
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === objective) {
    petIsIncluded = true;
    break;
  }
}

console.log('Pet is included?(FOR LOOP) ', petIsIncluded);

const response = pets.includes(objective);

console.log('Pet is included?(INCLUDES array method) ', petIsIncluded);
//NO ARRRAY FUNCTIONS Permitted
//This works for arrays and strings

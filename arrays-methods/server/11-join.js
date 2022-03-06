const elements = ['fire', 'air', 'water', 'ground'];

const separator = '--';
let response = '';
for (let index = 0; index < elements.length; index++) {
  const item = elements[index];
  // index === 0 ? response = item : response += separator + item;
  response += separator + item;
}

console.log('Concatenated by FOR LOOP ', response);

const response2 = elements.join('--');
console.log('Concatenated by JOIN array method ', response2);//fire--air--water--ground

const titleCourse = 'Curso de Manipulación de Arrays';
const url = titleCourse.split(' ').join('-');
console.log(url);//Curso-de-Manipulación-de-Arrays
type Squaresize = '100x100' | '500x500' | '1000x1000';
function createPicture(title: string, date: string, size: Squaresize){
  //photo is created
  console.log('Creating picture using ', title, date, size);
}

createPicture('Holidays', '10/03/2022', '100x100');
// createPicture('Colombia trip', '2022/02/2021');//error

function createPictureOptionalParam(title?: string, date?: string, size?: Squaresize){
  //photo is created
  console.log('Creating picture using ', title, date, size);
}

createPictureOptionalParam('Holidays', '10/03/2022', '100x100');
createPictureOptionalParam('Trip Colombia')


//flat array function
let createPic = (title: string, date: string, size: Squaresize): object => {
  return { title, date, size }
}

const picture = createPic('Colombia Trip', '2022/03/18', '100x100');
console.log('====================================');
console.log(picture);
console.log('====================================');


//return type with TS
function handleError(code: number, message: string): never | string {
  //processing code
  if (message === 'error') {
    throw new Error(`${message}. Code Error: ${code}`);
  } else {
    return 'An error has ocurred';
  }
}

try {
  let result = handleError(300, 'Ok');
  console.log('result: ', result);
  result = handleError(404, 'error');
  console.log('result: ', result);
} catch (error) {
  console.log('====================================');
  console.log('Error catched');
  console.log('====================================');
}

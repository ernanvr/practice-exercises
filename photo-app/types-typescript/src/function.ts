//void

//inferido
// function showInfo(user: any){
//   console.log('User info', user.id, user.lastname, user.firstname);
//   // return 'hola';
// }

//explicito
function showInfo(user: any): any {
  console.log('User info', user.id, user.lastname, user.firstname);
  // return 'hola';
}

showInfo( { id: 1, lastname: 'Ramirez', firstname: 'ernan' } )

function showFormattedInfo(user: any) {
  console.log(
    'User info: ', `
    id: ${user.id}
    full name: ${user.firstname} ${user.lastname} `
  );
}

showFormattedInfo( { id: 1, lastname: 'Ramirez', firstname: 'ernan' } );

//void as type var
let unusable: void;
// unusable = null;
unusable = undefined;

//never
function handleError(code:number, message:string): never {
  
  // process
  // generate an error
  throw new Error( ` ${message}. Code ${code}` );
}

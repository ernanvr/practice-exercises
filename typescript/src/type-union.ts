// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// function getUserNameById(id: number | string) {
//   //business rule
//   return 'ernanvr';
// }
// getUserNameById(20);
// getUserNameById('20');

//alias types
type IdUser = number | string;
type UserName = string;
let idUser: IdUser;
idUser = 20;
idUser = '20';

function getUserNameById(id: IdUser): UserName {
  return 'ernanvr';
}

//literal types
//100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';

// let smallPicture: SquareSize = '200x200';//error
let smallPicture: SquareSize = '100x100';
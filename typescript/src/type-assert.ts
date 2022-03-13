//<> angle bracket syntax
let username: any;
username = 'ernanvr';

let message: string = (<string> username).length > 5 ? 
              'Hi world, by '+ username : 'Username is too short'; 

console.log('message', message);

let userNameWithId: any = 'ernanvr 1';
username = (<string> userNameWithId).substring(0, 8);
console.log('username only: ', username);

//"AS" syntax
let username1: any;
username1 = 'ernanvr';

let message1: string = (username1 as string).length > 5 ? 
              'Hi world, by '+ username1 : 'Username is too short'; 

console.log('message', message);

let userNameWithId1: any = 'ernanvr 1';
username1 = (userNameWithId as string).substring(0, 8);
console.log('username1 only: ', username1);
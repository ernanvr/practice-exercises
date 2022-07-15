import { StringLiteralLike } from "typescript";

console.log('Hola platzi and world, from Typescript file');

//number
let phone: number;
phone = 1;
phone = 52849128;
// phone = '2412'; //Error

let phoneNumber = 124912;
phoneNumber = 102;
// phoneNumber = '1289'; //Error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o7244;

//BOOLEAN
let isPro: boolean;
isPro = true;
// isPro = 120394; //Error
let isUserPro = false;
// isUserPro = 0;//Error

//STRING
let username: string = 'Lucy';
username = 'Jhon';
// username = true; //Error

//Template string, back-tick `
let userinfo: string;
userinfo = `
  User Name: ${username}
  Phone: ${phoneNumber}
`
//ANY
let idUser: any;
idUser = 1;
idUser = '1';

let otherUser;
otherUser = 1;
otherUser = '1';

console.log(idUser);

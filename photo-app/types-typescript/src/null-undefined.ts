//explicit
let nullvar: null;
nullvar = null;
// nullvar = 1; //error

let othervariable = null;//any
othervariable = 2;


let undefinedVar: undefined;
undefinedVar = undefined;
// undefinedVar = 2; //error

let otherUndefVar = undefined;//any
otherUndefVar = 2;

//null and undefined as subtypes
let albumName: string;
// albumName = undefined;
// albumName = null;
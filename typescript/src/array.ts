//brackets []

//explicit
let users: string[];
users = ['ernan', 'sandra', 'jorge'];
// users = [1, 2, 3]; //error


//infer
let schoolUsers = ['juan', 'marcela', 'pedro'];
// schoolUsers = [1,2,3];//error

//array <type>
let pictureTitles: Array<string>;
pictureTitles = ['blooding hell', 'among us'];
// pictureTitles = [1, 2, 3];//error

console.log('first user', users[0]);

//properties in arrays
console.log('====================================');
console.log('users.length', users.length);
console.log('====================================');

//functions in arrays
users.push('maria');
users.sort();
console.log('users', users);
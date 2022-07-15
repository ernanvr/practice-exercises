import { Album } from "./album";
import { User } from "./user";
import { PhotoOrientation } from "./PhotoOrientation";
import { Picture } from "./picture";

const user = new User(1, 'ernanvr', true);
const album = new Album(10, 'Platzi pictures');
const picture = new Picture(1, "typescript course", PhotoOrientation.Landscape)
album.addPicture(picture);

console.log(`\n Edad \n Curso \n`)
console.log(user);
console.log(album);
console.log(picture);
console.log(user.getInfo());

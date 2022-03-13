export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //properties
  #id: number;
  #title: string;
  #orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation){
    this.#id = id;
    this.#title = title;
    this.#orientation = orientation;
  }

  public toString(){
    return `[id: ${this.#id}, title: ${this.#title}, orientation: ${this.orientation}]`;
  }

  get id(){ 
    return this.#id;
  }

  set id(id: number){
    this.#id = id;
  }

  get title(){
    return this.#title;
  }

  set title(title: string){
    this.#title = title;
  }

  get orientation(){
    return this.#orientation;
  }

  set orientation(orientation: PhotoOrientation){
    this.#orientation = orientation;
  }
}

class Album {
  #id: number;
  #title: string;
  #pictures: Picture[];

  public constructor(id: number, title: string){
    this.#id = id;
    this.#title = title;
    this.#pictures = [];
  }

  public addPicture(picture: Picture){
    this.#pictures.push(picture);
  }
}

const album: Album = new Album( 1, 'Personal pictures' );
const picture: Picture = new Picture(1, 'platzi session', PhotoOrientation.Landscape );
album.addPicture(picture);

console.log('album: ', album);
//getting access to public members of classes
picture.id = 100; //error
console.log('album: ', album);
console.log('picture: ', picture.id);
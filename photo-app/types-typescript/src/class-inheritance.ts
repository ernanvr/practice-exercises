export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Entity {
  protected _id: number;
  protected _title: string;
  protected _hideVar: number;

  constructor(id: number, title: string){
    this._id = id;
    this._title = title;
    this._hideVar = 10;
  }

  get id(){ 
    return this._id;
  }

  set id(id: number){
    this._id = id;
  }

  get title(){
    return this._title;
  }

  set title(title: string){
    this._title = title;
  }
}

class Picture extends Entity {
  //properties
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation){
    super(id, title);
    this._orientation = orientation;
    this._hideVar = 10;
  }

  public toString(){
    return `[id: ${this._id}, title: ${this._title}, orientation: ${this.orientation}]`;
  }


  get orientation(){
    return this._orientation;
  }

  set orientation(orientation: PhotoOrientation){
    this._orientation = orientation;
  }
}

class Album extends Entity {
  private _pictures: Picture[];

  public constructor(id: number, title: string){
    super(id, title);
    this._pictures = [];
  }

  public addPicture(picture: Picture){
    this._pictures.push(picture);
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
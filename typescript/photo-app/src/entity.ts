export class Entity {
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
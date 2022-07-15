import { Entity } from './entity'
import { PhotoOrientation } from './PhotoOrientation';

export class Picture extends Entity {
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
export class User {
  public readonly _id: number;
  private _username: string;
  private _isPro: boolean;

  constructor( id: number, username: string, isPro: boolean ) {
    this._id = id;
    this._username = username;
    this._isPro = isPro;
  }

  public getInfo(){
    return { id: this._id, username: this._username, isPro: this._isPro };
  }
}
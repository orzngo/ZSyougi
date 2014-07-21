module peace{
  export enum PeaceType{
    FU,
    KY,
    KE,
    GI,
    KI,
    KA,
    HI,
    OU,
    GY
  }

  export class Position{
    
    constructor(private _x: Number, private _y: Number){
    }

    get x(): Number{
      return this._x;
    }
    set x(val: Number){
      if(val <= 0 || val >= 9)
        throw new Error("invalid Position.x");
      this._x = val;
    }

    get y(): Number{
      return this._y;
    }
    set y(val: Number){
      if(val <= 0 || val >= 9)
        throw new Error("invalid Position.y");
      this._y = val;
    }

  }


  export class Peace{
    private _nari = false;

    constructor(private _position: Position, private _owner:Boolean){
    }

    get position(): Position{
      return this._position;
    }

    set position(val: Position){
      this._position = val;
    }

  }

}

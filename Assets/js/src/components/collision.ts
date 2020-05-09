export class Collision
{

   protected _configs: any;
   protected _data: any;

   protected _flag: boolean = false;

   public init(): void{

   }

   public loader(data: any): void{
      this._data = data;
   }

   public flag(set: boolean | null = null): boolean{
      return set != null ? this._flag = set : this._flag;
   }

   public set(object: object): void{
      for(let data in this._data){
         if(this._data[data].collision.flag === true){
            this.fromLeft(object, this._data[data]);
            this.fromRight(object, this._data[data]);
            this.fromTop(object, this._data[data]);
            this.fromBottom(object, this._data[data]);
         }
      }
   }

   protected fromLeft(object: any, data: any): void{
      if(object.position.x >= data.position.x && data.collision.left === true){
         this._flag = true;
      }
   }

   protected fromRight(object: any, data: any): void{
      if(object.position.x <= data.position.x  && data.collision.right === true){
         this._flag = true;
      }
   }

   protected fromTop(object: any, data: any): void{
      if(object.position.y <= data.position.y  && data.collision.top === true){
         this._flag = true;
      }
   }

   protected fromBottom(object: any, data: any): void{
      if(object.position.y >= data.position.y  && data.collision.bottom === true){
         this._flag = true;
      }
   }

}

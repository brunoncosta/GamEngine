export class Scenes
{

   protected _canvas: any;
   protected _data: any;

   public constructor(canvas: any){
      this._canvas = canvas;
   }

   public init(): void{
      this._data = new Array;
   }

   public loader(data: any): object{

      for(let object in data){

         const image = new Image();
         image.src = this.images(data[object].draw);

         this._data[data[object].name] = {
            image     : image,
            draw      : data[object].draw,
            position  : data[object].position,
            translate : data[object].translate
         };

      }

      return this._data;
   }

   public images(object: any): any{
      if(object.static != undefined){
         return object.static[1];
      }
   }

   public set(data: any):object{
      this._data[data.name] = {
         image     : data.image != undefined ? data.image : this._data[data.name].image,
         draw      : data.draw != undefined ? data.draw : this._data[data.name].draw,
         position  : data.position != undefined ? data.position : this._data[data.name].position,
         translate : data.translate != undefined ? data.translate : this._data[data.name].translate
      };
      return this._data;
   }

   public get(data: any): object{
      return this._data[data];
   }

}

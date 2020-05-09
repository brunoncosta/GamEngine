export class Movement
{

   protected _data!: any;
   protected _movement: any;

   protected init(): void{
      this._movement = new Array;
   }

   protected loader(type: string, data: any){
      if(type === "data"){
         this._data = data;
      }
      if(type === "movement"){
         for(let object in data){
            this._movement[data[object].name] = data[object];
         }
         return this._movement;
      }
   }

   protected set(data: any): object{

      for(let object in data){
         if(data[object].move === "left"){
            this.toLeft(data[object]);
         }
         if(data[object].move === "right"){
            this.toLeft(data[object]);
         }
         if(data[object].move === "top"){
            this.toLeft(data[object]);
         }
         if(data[object].move === "bottom"){
            this.toLeft(data[object]);
         }
      }

      return this._data;
   }

   protected position(data: any): number{
      if(data.position.flag == true){
         return data.position.value;
      }
      return 0;
   }

   protected translate(data: any): number{
      if(data.translate.flag == true){
         return data.translate.value;
      }
      return 0;
   }

   protected toLeft(data: any): void{
      this._data[data.name].position.x -= this.position(data);
      this._data[data.name].translate.x -= this.translate(data);
   }

   protected toRight(data: any): void{
      this._data[data.name].position.x += this.position(data);
      this._data[data.name].translate.x += this.translate(data);
   }

   protected toTop(data: any): void{
      this._data[data.name].position.y -= this.position(data);
      this._data[data.name].translate.y -= this.translate(data);
   }

   protected toBottom(data: any): void{
      this._data[data.name].position.y += this.position(data);
      this._data[data.name].translate.y += this.translate(data);
   }

}

export  class Draw
{

   protected _canvas: any;
   protected _context: any;

   protected _data: any;

   public constructor(canvas: any){
      this._canvas = canvas;
   }

   public init(): void{
      this._context = this._canvas.context();
   }

   public loader(data: any): void{
      this._data = data;
   }

   protected clear(): void{
      this._context.clearRect(0, 0, this._canvas.width(), this._canvas.height());
   }

   protected pattern(object: any): void{
      this._context.fillStyle = this._context.createPattern(object.image, "repeat");
   }

   protected image(object: any): void{
      this._context.drawImage(
         object.image,
         object.position.x,
         object.position.y,
         object.position.width,
         object.position.height
      );
   }

   public start(): void{

      this.clear();

      for(let object in this._data){

         if(this._data[object].draw.pattern === true){
            this.pattern(this._data[object]);
         }

         this._context.save();

         if(this._data[object].translate.flag === true){
            this._context.translate(
               -this._data[object].translate.x,
               this._data[object].translate.y
            );
         }

         if(this._data[object].draw.image === true){
            this.image(this._data[object]);
         }

         if(this._data[object].draw.fillRect === true){
            this._context.fillRect(
               this._data[object].position.x,
               this._data[object].position.y,
               this._data[object].position.width,
               this._data[object].position.height
            );
         }

         this._context.restore();

      }

   }

}

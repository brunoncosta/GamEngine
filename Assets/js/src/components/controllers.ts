export class Controllers
{

   protected _data: any;

   public init(): void{

   }

   public loader(data: any): void{
      this._data[data.key + "-" + data.keyCode] = data.action;
   }

   public listener(): void{

      window.addEventListener("keydown", (key) => {
         if(this._data.hasOwnProperty("keydown-" + key.keyCode) === true){
            this._data["keydown-" + key.keyCode]();
         }
      });

      window.addEventListener("keyup", (key) => {
         if(this._data.hasOwnProperty("keyup" + key.keyCode) === true){
            this._data["keyup-" + key.keyCode]()
         }
      });

   }

}

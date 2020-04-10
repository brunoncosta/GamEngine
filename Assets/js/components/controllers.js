class Controllers
{

   _data;

   init(){
      this._data = new Array();
   }

   loader(data){
      this._data[data.key + "-" + data.keyCode] = data.action;
   }

   listener(){
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

"use strict";

class Movement
{

   _data;

   loader(data){
      this._data = data;
   }

   set(data){
      if(data.move === "left"){
         this.toLeft(data);
      }
      if(data.move === "right"){
         this.toLeft(data);
      }
      if(data.move === "top"){
         this.toLeft(data);
      }
      if(data.move === "bottom"){
         this.toLeft(data);
      }
      return this._data;
   }

   toLeft(data){
      this._data[data.name].position.x -= data.value;
      this._data[data.name].position.x -= data.translate;
   }

   toRight(data){
      this._data[data.name].position.x += data.value;
      this._data[data.name].position.x += data.translate;
   }

   toTop(data){
      this._data[data.name].position.y -= data.value;
      this._data[data.name].position.y -= data.translate;
   }

   toBottom(data){
      this._data[data.name].position.y += data.value;
      this._data[data.name].position.y += data.translate;
   }

}

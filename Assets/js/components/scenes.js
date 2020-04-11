"use strict";

class Scenes
{

   _configs;
   _data;

   construtor(configs){
      this._configs = configs;
   }

   init(){
      this._data = new Array();
   }

   loader(data){
      this._data[data.name] = this.set(data);
      return this._data;
   }

   images(object){
      if(object.static != undefined){
         return object.static[1];
      }
   }

   set(data){
      const image = new Image();
      image.src = this.images(data.draw);

      return {
         image     : image,
         draw      : data.draw,
         position  : data.position,
         translate : data.translate
      };
   }

   get(data){
      return this._data[data];
   }

}

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
      this._data[data.name] = this.set(data.type);
   }

   set(type){
      const image = new Image();
      image.src = this.this._configs.scenes[type].image;

      return {
         image : image,
         position : this.this._configs.scenes[type].position,
         translate : this.this._configs.scenes[type].translate
      };
   }

   get(value){
      return this._data[value];
   }

}

"use strict";

class Game
{

   _canvas;
   _context;
   _engine;

   _configs;
   _images;

   constructor(){
      this._images = new Images();
   }

   load(type, data){
      if(type === "configs"){
         this._configs = data;
      }
      if(type === "image"){
         this._images.loader(data);
      }
      if(type === "images"){
         for(let image of type){
            this._images.loader(image);
         }
      }
   }

   init(){
      this._canvas = new Canvas(this._configs);
      this._context = this._canvas.context();

      this._canvas = new Engine();
   }


}

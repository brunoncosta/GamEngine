"use strict";

class Game
{

   _configs;
   _canvas;
   _context;
   _engine;
   _controllers;

   _images;

   constructor(){
      this._images      = new Images();
      this._controllers = new Controllers();
      this._controllers.init();
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
      if(type === "controller"){
         this._controllers.loader(data);
      }
   }

   init(){
      this._canvas = new Canvas(this._configs);
      this._context = this._canvas.context();

      this._canvas = new Engine();

   }

   start(){
      cl("aqui");
      this._controllers.listener();
   }


}

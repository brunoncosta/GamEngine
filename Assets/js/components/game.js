"use strict";

class Game
{

   _configs;

   _canvas;
   _context;
   _engine;
   _scenes;

   _images;
   _controllers;

   _loaded = {
      data: null
   };

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
         for(let image of Object.keys(data) ){
            this._images.loader(data[image]);
         }
      }
      if(type === "scenes"){
         this._loaded.data = this._scenes.loader(data);
         this._draw.loader(this._loaded.data);

      }
      if(type === "controller"){
         this._controllers.loader(data);
      }
   }

   init(){
      this._canvas = new Canvas(this._configs);
      this._context = this._canvas.context();

      this._engine = new Engine();

      this._scenes = new Scenes();
      this._scenes.init();

      this._draw = new Draw(this._canvas);
      this._draw.init();
   }

   start(){
      this._controllers.listener();
      this._draw.start();
   }


}

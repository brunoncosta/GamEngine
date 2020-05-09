import { Images } from "./images.js";
import { Scenes } from "./scenes.js";
import { Collision } from "./collision.js";
import { Movement } from "./movement.js";
import { Controllers } from "./controllers.js";

import { Engine } from "./engine.js";
import { Canvas } from "./canvas.js";
import { Draw } from "./draw.js";

export class Game
{

   protected _configs: any;

   protected _canvas: any;
   protected _context: any;
   protected _engine: any;
   protected _scenes: any;
   protected _collision: any;
   protected _movement: any;
   protected _draw: any;

   protected _images: any;
   protected _controllers: any;

   protected _loaded = {
      data: {},
      movement: {}
   };

   public constructor(){
      this._images      = new Images();
      this._controllers = new Controllers();
      this._controllers.init();
   }

   public loader(): void{
      this._movement.loader("data", this._loaded.data);
   }

   public load(type: string, data: any): void{
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
      if(type === "data"){
         this._loaded.data = this._scenes.loader(data);
         this.loader();
      }
      if(type === "controller"){
         this._controllers.loader(data);
      }
   }

   public init(): void{
      this._canvas = new Canvas(this._configs);
      this._canvas.init();
      this._context = this._canvas.context();

      this._engine = new Engine(this._configs);

      this._scenes = new Scenes(this._canvas);
      this._scenes.init();

      this._collision = new Collision();
      this._collision.init();

      this._movement = new Movement();
      this._movement.init();

      this._draw = new Draw(this._canvas);
      this._draw.init();
   }

   public set(type: string, data: object): void{
      if(type === "data"){
         this._loaded.data = this._scenes.set(data);
      }
      if(type === "movements"){
         this._loaded.movement = this._movement.loader("movement", data);
         this._loaded.data = this._movement.set(this._loaded.movement);
      }
   }

   protected frames(): void{
      this._collision.flag(false);

      this._movement.loader("data", this._loaded.data);
      this._loaded.data = this._movement.set(this._loaded.movement);

      this._draw.loader(this._loaded.data);
      this._draw.start();

      requestAnimationFrame(this.frames.bind(this));
   }

   public start(): void{
      this._controllers.listener();
      this.frames();
   }


}

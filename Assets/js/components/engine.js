"use strict";

class Engine
{

   _gravity;
   _gravitySpeed;
   _ground;

   constructor(configs){
      this.configs = configs;
   }

   init(){
      this._gravity      = this.configs.engine.gravity;
      this._gravitySpeed = 0;
      this._ground = {
         default: this.configs.engine.ground.y,
         y: this.configs.engine.ground.y
      };
   }

   groundDefault(set = null){
      return set != null ? this._ground.default = set : this._ground.default;

   }

   ground(set = null){
      if(set === "default"){
         return this._ground.y = this.groundDefault();
      }
      return set != null ? this._ground.y = set : this._ground.y;
   }

   gravity(y, jump = false){

      if(jump === true){
         return y;
      }

      if(this.ground() <= y){
         this._gravitySpeed = 0
         return this.ground();
      }

      this._gravitySpeed += this._gravity;
      return y += this._gravitySpeed;
   }



}

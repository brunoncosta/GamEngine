"use strict";

class Canvas
{

   $game;
   context;

   constructor(){
      this.$game   = document.getElementById("game");
      this.context = this.$game.getContext("2d");
   }

   resize(){
      window.addEventListener('resize', () => {
         this.size();
      });
   }

   init(){
      this.$game.width  = window.innerWidth;
      this.$game.height = window.innerHeight;
   }

}

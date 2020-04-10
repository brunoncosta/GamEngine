"use strict";

const game = new Game();
game.load("configs", configs);
const teste = {
   key: "keydown",
   keyCode: "32",
   action: function(){
      alert("ola");
   }
};
game.load("controller", teste);
game.init();
game.start();

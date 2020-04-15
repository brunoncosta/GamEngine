"use strict";

const game = new Game();

// Load Configs
game.load("configs", configs);
game.init();

// "Pre"Load Images
game.load("images", configs.scenes.sky.draw.static);
game.load("images", configs.scenes.floor.draw.static);

// Load all the Data
game.load("data", configs.scenes.sky);
game.load("data", configs.scenes.floor);

const sky = {
   name: "sky",
   position : {
      x: 0,
      y: 0,
      width: game._canvas.width(),
      height: game._canvas.height()
   }
};

const floor = {
   name: "floor",
   position : {
      x: 0,
      y: 0,
      width: game._canvas.width(),
      height: 64
   },
   translate: {
      x: 0,
      y: game._canvas.height() - 64
   }
};

game.set("data", sky);
game.set("data", floor);

const floorMovement = {
   name: "floor",
   move: "left",
   value: 2,
   translate: 2
};

game.set("movement", floorMovement);

// Start the Dame
game.start();

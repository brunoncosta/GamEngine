"use strict";

const game = new Game();
game.load("configs", configs);
game.init();

game.load("images", configs.scenes.sky.draw.static);
game.load("images", configs.scenes.floor.draw.static);

game.load("scenes", configs.scenes.sky);
game.load("scenes", configs.scenes.floor);

game.start();

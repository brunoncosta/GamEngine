"use strict";

const game = new Game();

// Load Configs
game.load("configs", configs);
game.init();

const _scenes = scenes(game);

// "Pre"Load Images
game.load("images", _scenes.sky.draw.static);
game.load("images", _scenes.floor.draw.static);

// Load all the Data
game.load("data", _scenes);

const _movement = movement(game);

// Set Movement
game.set("movements", _movement);

// Start the Dame
game.start();

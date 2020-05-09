import { configs } from "./data/configs.js";
import { scenes } from "./data/scenes.js";
import { movement } from "./data/movement.js";

import { Game } from "./components/game.js";

const game = new Game();

// Load Configs
game.load("configs", configs);
game.init();

const _scenes: any = scenes(game);

// "Pre"Load Images
game.load("images", _scenes.layer_1.draw.static);
game.load("images", _scenes.layer_2.draw.static);
game.load("images", _scenes.layer_3.draw.static);
game.load("images", _scenes.layer_4.draw.static);
game.load("images", _scenes.layer_5.draw.static);
game.load("images", _scenes.layer_6.draw.static);
game.load("images", _scenes.layer_7.draw.static);
game.load("images", _scenes.layer_8.draw.static);
game.load("images", _scenes.layer_9.draw.static);
game.load("images", _scenes.layer_10.draw.static);
game.load("images", _scenes.layer_11.draw.static);

// Load all the Data
game.load("data", _scenes);

const _movement = movement();

// Set Movement
game.set("movements", _movement);

// Start the Dame
game.start();

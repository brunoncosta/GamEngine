import { Images } from "./images.js";
import { Scenes } from "./scenes.js";
import { Collision } from "./collision.js";
import { Movement } from "./movement.js";
import { Controllers } from "./controllers.js";
import { Engine } from "./engine.js";
import { Canvas } from "./canvas.js";
import { Draw } from "./draw.js";
export class Game {
    constructor() {
        this._loaded = {
            data: {},
            movement: {}
        };
        this._images = new Images();
        this._controllers = new Controllers();
        this._controllers.init();
    }
    loader() {
        this._movement.loader("data", this._loaded.data);
    }
    load(type, data) {
        if (type === "configs") {
            this._configs = data;
        }
        if (type === "image") {
            this._images.loader(data);
        }
        if (type === "images") {
            for (let image of Object.keys(data)) {
                this._images.loader(data[image]);
            }
        }
        if (type === "data") {
            this._loaded.data = this._scenes.loader(data);
            this.loader();
        }
        if (type === "controller") {
            this._controllers.loader(data);
        }
    }
    init() {
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
    set(type, data) {
        if (type === "data") {
            this._loaded.data = this._scenes.set(data);
        }
        if (type === "movements") {
            this._loaded.movement = this._movement.loader("movement", data);
            this._loaded.data = this._movement.set(this._loaded.movement);
        }
    }
    frames() {
        this._collision.flag(false);
        this._movement.loader("data", this._loaded.data);
        this._loaded.data = this._movement.set(this._loaded.movement);
        this._draw.loader(this._loaded.data);
        this._draw.start();
        requestAnimationFrame(this.frames.bind(this));
    }
    start() {
        this._controllers.listener();
        this.frames();
    }
}
//# sourceMappingURL=game.js.map
export class Scenes {
    constructor(canvas) {
        this._canvas = canvas;
    }
    init() {
        this._data = new Array;
    }
    loader(data) {
        for (let object in data) {
            const image = new Image();
            image.src = this.images(data[object].draw);
            this._data[data[object].name] = {
                image: image,
                draw: data[object].draw,
                position: data[object].position,
                translate: data[object].translate
            };
        }
        return this._data;
    }
    images(object) {
        if (object.static != undefined) {
            return object.static[1];
        }
    }
    set(data) {
        this._data[data.name] = {
            image: data.image != undefined ? data.image : this._data[data.name].image,
            draw: data.draw != undefined ? data.draw : this._data[data.name].draw,
            position: data.position != undefined ? data.position : this._data[data.name].position,
            translate: data.translate != undefined ? data.translate : this._data[data.name].translate
        };
        return this._data;
    }
    get(data) {
        return this._data[data];
    }
}
//# sourceMappingURL=scenes.js.map
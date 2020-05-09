export class Draw {
    constructor(canvas) {
        this._canvas = canvas;
    }
    init() {
        this._context = this._canvas.context();
    }
    loader(data) {
        this._data = data;
    }
    clear() {
        this._context.clearRect(0, 0, this._canvas.width(), this._canvas.height());
    }
    pattern(object) {
        this._context.fillStyle = this._context.createPattern(object.image, "repeat");
    }
    image(object) {
        this._context.drawImage(object.image, object.position.x, object.position.y, object.position.width, object.position.height);
    }
    start() {
        this.clear();
        for (let object in this._data) {
            if (this._data[object].draw.pattern === true) {
                this.pattern(this._data[object]);
            }
            this._context.save();
            if (this._data[object].translate.flag === true) {
                this._context.translate(-this._data[object].translate.x, this._data[object].translate.y);
            }
            if (this._data[object].draw.image === true) {
                this.image(this._data[object]);
            }
            if (this._data[object].draw.fillRect === true) {
                this._context.fillRect(this._data[object].position.x, this._data[object].position.y, this._data[object].position.width, this._data[object].position.height);
            }
            this._context.restore();
        }
    }
}
//# sourceMappingURL=draw.js.map
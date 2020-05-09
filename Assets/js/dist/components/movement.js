export class Movement {
    init() {
        this._movement = new Array;
    }
    loader(type, data) {
        if (type === "data") {
            this._data = data;
        }
        if (type === "movement") {
            for (let object in data) {
                this._movement[data[object].name] = data[object];
            }
            return this._movement;
        }
    }
    set(data) {
        for (let object in data) {
            if (data[object].move === "left") {
                this.toLeft(data[object]);
            }
            if (data[object].move === "right") {
                this.toLeft(data[object]);
            }
            if (data[object].move === "top") {
                this.toLeft(data[object]);
            }
            if (data[object].move === "bottom") {
                this.toLeft(data[object]);
            }
        }
        return this._data;
    }
    position(data) {
        if (data.position.flag == true) {
            return data.position.value;
        }
        return 0;
    }
    translate(data) {
        if (data.translate.flag == true) {
            return data.translate.value;
        }
        return 0;
    }
    toLeft(data) {
        this._data[data.name].position.x -= this.position(data);
        this._data[data.name].translate.x -= this.translate(data);
    }
    toRight(data) {
        this._data[data.name].position.x += this.position(data);
        this._data[data.name].translate.x += this.translate(data);
    }
    toTop(data) {
        this._data[data.name].position.y -= this.position(data);
        this._data[data.name].translate.y -= this.translate(data);
    }
    toBottom(data) {
        this._data[data.name].position.y += this.position(data);
        this._data[data.name].translate.y += this.translate(data);
    }
}
//# sourceMappingURL=movement.js.map
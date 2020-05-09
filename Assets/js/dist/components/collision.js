export class Collision {
    constructor() {
        this._flag = false;
    }
    init() {
    }
    loader(data) {
        this._data = data;
    }
    flag(set = null) {
        return set != null ? this._flag = set : this._flag;
    }
    set(object) {
        for (let data in this._data) {
            if (this._data[data].collision.flag === true) {
                this.fromLeft(object, this._data[data]);
                this.fromRight(object, this._data[data]);
                this.fromTop(object, this._data[data]);
                this.fromBottom(object, this._data[data]);
            }
        }
    }
    fromLeft(object, data) {
        if (object.position.x >= data.position.x && data.collision.left === true) {
            this._flag = true;
        }
    }
    fromRight(object, data) {
        if (object.position.x <= data.position.x && data.collision.right === true) {
            this._flag = true;
        }
    }
    fromTop(object, data) {
        if (object.position.y <= data.position.y && data.collision.top === true) {
            this._flag = true;
        }
    }
    fromBottom(object, data) {
        if (object.position.y >= data.position.y && data.collision.bottom === true) {
            this._flag = true;
        }
    }
}
//# sourceMappingURL=collision.js.map
class Vector {
    constructor(name, x, y, v) {
        this._name = name;
        this._x = x;
        this._y = y;
        this._velocity = v;
    }

    get x() {
        return this._x;
    }

    set x(p) {
        this._x = p;
    }

    get y() {
        return this._y;
    }

    set y(p) {
        this._y = p;
    }


    print() {
        console.log(`Vector ${this._name} X: ${this._x}, Y: ${this._y}, V: ${this._velocity}`);
    }

    add(vector) {

    }

    minus(vector) {

    }
}

let v = new Vector("ball", 10, 11, 12);
v.print();
console.log("Hi");
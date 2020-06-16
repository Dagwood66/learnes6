// TODO 类的prototype属性和__proto__属性
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return this.x + " " + this.y;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return this.color + " " + super.toString();
    }
}

console.log(ColorPoint.__proto__ === Point);
console.log(ColorPoint.prototype.__proto__ === Point.prototype);
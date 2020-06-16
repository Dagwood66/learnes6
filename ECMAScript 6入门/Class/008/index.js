// 继承
// extends 继承了父类的所有属性和方法
// super 表示父类的构造函数，用来新建父类的this对象
// 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。

// ES5的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
// ES6的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
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

let colorPoint = new ColorPoint(1, 2, "白色");
console.log(colorPoint);
console.log(colorPoint.toString());

console.log(colorPoint instanceof Point);
console.log(colorPoint instanceof ColorPoint);

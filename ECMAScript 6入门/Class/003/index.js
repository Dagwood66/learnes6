// 类的实例对象
// 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
// 类的所有实例共享一个原型对象
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return this.x + "_" + this.y;
    }
}

let point = new Point(2, 3);

console.log(point.toString());

console.log(point.hasOwnProperty("x"));
console.log(point.hasOwnProperty("toString"));
console.log(point.__proto__.hasOwnProperty("toString"));

let point1 = new Point(1, 2);
let point2 = new Point(1, 2);

console.log(point1.__proto__ === point2.__proto__);
point1.__proto__.printName = function () {
    return "test";
}
console.log(point1.printName());
console.log(point2.printName());
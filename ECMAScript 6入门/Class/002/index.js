// 通过Class生成对象(语法糖)
// 方法之间不需要，分割
// 必须使用 new 声明
// Class中的定义的方法不可枚举，es5构造函数定义的方法可以枚举
class Point {
    // 构造方法
    // 默认返回this
    // 没有显式定义会默认返回空constructor方法
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // 无需 function 关键字
    toString() {
        return `${this.x}-${this.y}`
    }
}

let point = new Point(1, 2);
console.log(point);

console.log(typeof Point);
console.log(point instanceof Point);
// 方法不可枚举
console.log(Object.keys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));
// 错误调用
// console.log(Point());
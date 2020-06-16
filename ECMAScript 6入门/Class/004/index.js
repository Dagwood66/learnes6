// 类声明不存在变量提升
// 子类必须在父类之后定义

// Uncaught ReferenceError: Cannot access 'Point' before initialization
// let point = new Point();

class Point {
    
}

let point = new Point();

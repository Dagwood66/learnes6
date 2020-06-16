// this的指向
// TODO Proxy
// class Logger {
//     constructor() {
//         // 方式1 - 构造方法中绑定this
//         this.printName = this.printName.bind(this);
//     }

//     printName(name = "there") {
//         this.print(`hello ${name}`);
//     }

//     print(text) {
//         console.log(text);
//     }
// }

class Logger {
    constructor() {
        // 方式2 - 箭头函数
        this.printName = (name = "there") => {
            this.print(`hello ${name}`);
        }
    }

    print(text) {
        console.log(text);
    }
}

// TODO 方式3 - proxy

let logger = new Logger();
console.log(logger);

const { printName } = logger;

printName();
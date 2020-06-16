// 私有方法
// 方式1
class Widget {
    foo(baz) {
        this._bar(baz);
    }

    // _bar方法前面的下划线，表示这是一个只限于内部使用的私有方法。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法
    _bar(baz) {
        return this.snaf = baz;
    }
}
let widget = new Widget();
console.log(widget);

// 方式2 - 私有方法移出模块
{
    function bar(baz) {
        return this.snaf = baz;
    }

    class Widget {
        foo(baz) {
            bar.call(this, baz);
        }
    }

    let widget = new Widget();
    console.log(widget);
}

// 方式3 - Symbol
{
    const bar = Symbol("bar");
    const sbnf = Symbol("snaf");

    class MyClass {
        foo(baz) {
            this[bar](baz);
        }

        [bar](baz) {
            return this[sbnf] = baz;
        }
    }

    let myClass = new MyClass();
    console.log(myClass);
}
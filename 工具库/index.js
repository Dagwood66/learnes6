/*
* 对象的key根据字母大小顺序排序
* */
export function objSortByKey(obj) {
    let newKeyArr = Object.keys(obj).sort();
    let newObj = {};
    for (let i = 0; i < newKeyArr.length; i++) {
        newObj[newKeyArr[i]] = obj[newKeyArr[i]];
    }
    return newObj;
}

/*
* 对象转换为url参数
* */
export function toQuery(obj) {
    let keys = Object.keys(obj);
    let arr = [];
    for (let key in keys) {
        arr.push(`${keys[key]}=${obj[keys[key]]}`);
    }
    return arr.join("&");
}
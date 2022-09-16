"use strict";
const cars = ["BMW", "AUDI"];
const cars2 = ["AUDI", "BMW"];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise resolved");
    }, 2000);
});
promise.then((data) => {
    console.log(data.toUpperCase());
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
function withCount(value) {
    return { value, count: 'lalala ' + value.length };
}
let person = { 'age': 19, "name": "John" };
function getObjectValue(object, key) {
    return object[key];
}
//# sourceMappingURL=generic.js.map
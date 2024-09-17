"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.toNumber = function () {
    return Number(this);
};
Number.prototype.toString = function () {
    return String(this);
};
Number.prototype.isOdd = function () {
    if (typeof this !== "number") {
        // This is a type guard
        throw new Error("The value is not a number");
    }
    return this % 2 !== 0;
};
var a = 1;
console.log(a.toString());
if (a.isOdd()) {
    console.log('a is odd');
}
else {
    console.log('a is even');
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var x = 10;
console.log("x value is ".concat(x));
// string
var s1 = "You are the creter of your destiny";
var s2 = "Powerfull people come from powefull places ".concat(x);
console.log(s1);
console.log(s2);
// Boolean 
var b1 = true;
var b2 = false;
var b3;
console.log(b1);
console.log(b2);
function test() {
    return b3 = false;
    console.log(b3);
}
console.log(test());
// any - data type 
var product = {
    productId: 1,
    productName: "Iphone",
    productPrice: 140000,
    isAvaible: true
};
console.log(product);
var _05_utils_1 = require("./05_utils");
console.log((0, _05_utils_1.isPalindrome)('madam'));
console.log((0, _05_utils_1.isPalindrome)('madan'));

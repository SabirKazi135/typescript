"use strict";
const arr = [4, 5, 6, 7, 8, 9];
let sum = arr.reduce((total, num) => {
    return total + num;
}, 10);
console.log(sum);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvenNumbers = void 0;
const getEvenNumbers = (numbersArray) => {
    return numbersArray.filter(e => e % 2 === 0);
};
exports.getEvenNumbers = getEvenNumbers;
console.log((0, exports.getEvenNumbers)([1, 2, 3, 6, 8, 10]));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noOdds = void 0;
function noOdds(values) {
    const newArr = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
            newArr.push(values[i]);
        }
    }
    return newArr;
}
exports.noOdds = noOdds;
console.log(noOdds([0, 1, 2, 3]));

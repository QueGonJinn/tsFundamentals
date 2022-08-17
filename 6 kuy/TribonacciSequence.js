"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tribonacci = void 0;
function tribonacci([a, b, c], n) {
    const arrTri = [a, b, c];
    if ([a, b, c].length === 0 || n === 0) {
        return [];
    }
    if (n === 1) {
        return [a];
    }
    if (n === 2) {
        return [a, b];
    }
    for (let i = 2; i < n - 1; i++) {
        arrTri.push((arrTri[i - 2] + arrTri[i - 1] + arrTri[i]));
    }
    return arrTri;
}
exports.tribonacci = tribonacci;
console.log(tribonacci([1, 1, 1], 10));

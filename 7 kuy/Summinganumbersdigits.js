"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumDigits = void 0;
function sumDigits(n) {
    let s = n.toString();
    let num = s.split('').map(e => (Number.isFinite(+e) ? +e : 0)).reduce((sum, cur) => sum + cur);
    return num;
}
exports.sumDigits = sumDigits;
console.log(sumDigits(-12));

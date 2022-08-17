"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextBigger = void 0;
function nextBigger(n) {
    const sortedDigits = (n) => ('' + n).split('').sort((a, b) => +b - +a);
    const max = +sortedDigits(n).join('');
    for (let i = n + 1; i <= max; i++) {
        if (max === +sortedDigits(i).join('')) {
            return i;
        }
    }
    return -1;
}
exports.nextBigger = nextBigger;
console.log(nextBigger(513));

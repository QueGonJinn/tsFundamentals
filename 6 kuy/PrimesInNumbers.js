"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeFactors = void 0;
const primeFactors = (n) => {
    let arr = [];
    let str = '';
    function cal(n) {
        if (n > 1) {
            for (let i = 2; i <= n; i++) {
                if (n % 2 == 0) {
                    arr.push(i);
                    cal(n / i);
                    return true;
                }
            }
        }
        else {
            return true;
        }
        return arr;
    }
    return arr.join(',');
};
exports.primeFactors = primeFactors;
console.log((0, exports.primeFactors)(7775460));

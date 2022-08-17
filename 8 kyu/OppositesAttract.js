"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lovefunc = void 0;
function lovefunc(flower1, flower2) {
    return ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) ? true : false;
}
exports.lovefunc = lovefunc;
console.log(lovefunc(808, 20));

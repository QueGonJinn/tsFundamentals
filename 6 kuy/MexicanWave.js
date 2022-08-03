"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wave = void 0;
function wave(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (str[i] === ' ') {
            continue;
        }
        else {
            arr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
        }
    }
    return arr;
}
exports.wave = wave;
console.log(wave('Two words'));

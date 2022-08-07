"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findShort = void 0;
function findShort(s) {
    const arr = s.split(' ');
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min.length > arr[i].length) {
            min = arr[i];
        }
    }
    return min.length;
}
exports.findShort = findShort;
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

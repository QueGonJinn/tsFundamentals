"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
function parse(data) {
    let counter = 0;
    let result = [];
    data.split('').forEach((el) => {
        if (el === 'd') {
            counter--;
        }
        if (el === 'i') {
            counter++;
        }
        if (el === 's') {
            counter = counter ** 2;
        }
        if (el === 'o') {
            result.push(counter);
        }
    });
    return result;
}
exports.parse = parse;
console.log(parse('iioiiso'));

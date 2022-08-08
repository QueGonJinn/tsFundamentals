"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = void 0;
function solve(s) {
    return s.split(/[uoiea]/)
        .map(s => s.split('')
        .reduce((acc, c) => acc + (c.charCodeAt(0) - 96), 0))
        .sort((a, b) => b - a)[0];
}
exports.solve = solve;
console.log(solve('chruschtschov'));

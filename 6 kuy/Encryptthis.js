"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptThis = void 0;
const encryptThis = (str) => {
    if (str.length === 0) {
        return '';
    }
    if (str.length === 1) {
        return str.charCodeAt(0).toString();
    }
    const newStr = str.split(' ').map(e => (e.length === 1) ? e[0].charCodeAt(0).toString() : (e.length === 2) ? e[0].charCodeAt(0).toString() + e.slice(1) : e[0].charCodeAt(0).toString() + e.slice(e.length - 1) + e.slice(2, e.length - 1) + e.slice(1, 2)).join(' ');
    return newStr;
};
exports.encryptThis = encryptThis;
console.log((0, exports.encryptThis)('A wise old owl lived in an oak'));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinct2 = exports.distinct = void 0;
const distinct = (a) => {
    return a.filter((el, index) => {
        return a.indexOf(el) === index;
    });
};
exports.distinct = distinct;
console.log((0, exports.distinct)([1, 1, 2, 2, 4, 3, 3]));
const distinct2 = (a) => {
    let ua = [];
    a.forEach(el => {
        if (!ua.includes(el)) {
            ua.push(el);
        }
    });
    return ua;
};
exports.distinct2 = distinct2;
console.log((0, exports.distinct2)([1]));

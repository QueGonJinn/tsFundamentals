"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.towerBuilder = void 0;
const towerBuilder = (nFloors) => {
    let arrBuilder = [];
    for (let i = 0; i < nFloors; i++) {
        arrBuilder.push(`${' '.repeat(nFloors - (i + 1))}${'*'.repeat((2 * i) + 1)}${' '.repeat(nFloors - (i + 1))}`);
    }
    return arrBuilder;
};
exports.towerBuilder = towerBuilder;
console.log((0, exports.towerBuilder)(1));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mix = void 0;
const collectData = (map, str, arraySequence) => {
    var _a;
    if (((_a = str === null || str === void 0 ? void 0 : str.match(/[a-z]/g)) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
        str.match(/[a-z]/g) || []
            .forEach((v) => {
            const format = map.get(v) || {};
            format[arraySequence] = (format[arraySequence] || 0) + 1;
            format.max = Math.max(format[1] || 0, format[2] || 0);
            if (format[1] === format[2]) {
                format.greater = '=';
            }
            else {
                format.greater = (format[1] || 0) > (format[2] || 0) ? 1 : 2;
            }
            map.set(v, format);
        });
    }
    return map;
};
const mix = (s1, s2) => {
    let map = collectData(new Map(), s1, 1);
    map = collectData(map, s2, 2);
    const sortedResult = [...map.entries()].sort((a, b) => {
        if (a[1].max < b[1].max) {
            return 1;
        }
        if (a[1].max === b[1].max) {
            if ((parseInt(a[1].greater) || 3) > (parseInt(b[1].greater) || 3)) {
                return 1;
            }
            if (a[1].greater === b[1].greater) {
                return a[0].localeCompare(b[0]);
            }
        }
        return -1;
    }).filter((v) => v[1].max > 1);
    return sortedResult.map((v) => `${v[1].greater}:${v[0].repeat(v[1].max)}`)
        .join('/');
};
exports.mix = mix;
console.log((0, exports.mix)("Are they here", "yes, they are here"));

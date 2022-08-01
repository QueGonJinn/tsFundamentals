"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comp = exports.goals = exports.stockList = exports.printerError = exports.findOdd = exports.reverseWords = exports.warnTheSheep = exports.angle = exports.accum = exports.race = exports.bouncingBall = exports.rowWeightsf = exports.rowWeights = exports.position = exports.doubleChar = exports.longestConsec = exports.hello = exports.smallEnough = exports.greet = exports.xor = exports.findNb = exports.checkExam = exports.capitalize = exports.findDifference = exports.litres = exports.index = exports.getRealFloor = exports.between = exports.xo = exports.feast = exports.descendingOrder = exports.reverseSeq = exports.findAverage = exports.Kata2 = exports.Kata = exports.duplicateCount = exports.max = exports.min = exports.positiveSum = exports.getSum = exports.divisors = exports.twiceAsOld = exports.expressionsMatter = exports.correct = exports.grow = exports.findNeedle = void 0;
function findNeedle(haystack) {
    return `found the needle at position ${haystack.findIndex(value => value === 'needle')}`;
}
exports.findNeedle = findNeedle;
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
function grow(arr) {
    return arr.reduce((cur, item) => cur * item);
}
exports.grow = grow;
console.log(grow([4, 1, 1, 1, 4]));
function correct(s) {
    return s.split('').map(e => (e === '0') ? e = 'O' : (e === '5') ? e = 'S' : (e === '1') ? e = 'I' : e).join('');
}
exports.correct = correct;
console.log(correct('L0ND0N'));
function expressionsMatter(a, b, c) {
    const m1 = a * b * c;
    const m2 = (a + b) * c;
    const m3 = a * (b + c);
    const m4 = a + b + c;
    return Math.max(m1, m2, m3, m4);
}
exports.expressionsMatter = expressionsMatter;
console.log(expressionsMatter(1, 2, 3));
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((dadYearsOld - sonYearsOld) * 2 - dadYearsOld);
}
exports.twiceAsOld = twiceAsOld;
console.log(twiceAsOld(36, 7));
function divisors(n) {
    let counter = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            counter++;
        }
    }
    return counter;
}
exports.divisors = divisors;
console.log(divisors(64));
function getSum(a, b) {
    let sum = 0;
    if (a === b) {
        sum = a;
    }
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
    }
    else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum = sum + i;
        }
        sum = sum + a;
    }
    return sum;
}
exports.getSum = getSum;
console.log(getSum(5, -10));
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}
exports.positiveSum = positiveSum;
console.log(positiveSum([-1, 2, 3, 4, -5]));
const min = (list) => {
    let min = list[0];
    for (let i = 0; i < list.length; i++)
        if (list[i] < min) {
            min = list[i];
        }
    return min;
};
exports.min = min;
const max = (list) => {
    let max = list[0];
    for (let i = 0; i < list.length; i++)
        if (list[i] > max) {
            max = list[i];
        }
    return max;
};
exports.max = max;
console.log((0, exports.min)([-52, 56, 30, 29, -54, 0, -110]));
console.log((0, exports.max)([-52, 56, 30, 29, -54, 0, -110]));
function duplicateCount(text) {
    let map = new Map();
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        map.set(char, map.has(char) ? true : false);
    }
    return [...map].filter(e => e[1]).length;
}
exports.duplicateCount = duplicateCount;
console.log(duplicateCount('aabbcde'));
class Kata {
    static getCount(str) {
        let reg = /^[aeiou]$/i;
        let count = 0;
        str.split('').forEach(e => {
            (reg.test(e)) ? count++ : count;
        });
        return count;
    }
}
exports.Kata = Kata;
console.log(Kata.getCount("abracadabra"));
class Kata2 {
    static dnaStrand(dna) {
        return dna.split('').map((e) => (e === 'A') ? e = 'T' : (e === 'T') ? e = 'A' : (e === 'C') ? e = 'G' : (e === 'G') ? e = 'C' : e = e).join('');
    }
}
exports.Kata2 = Kata2;
console.log(Kata2.dnaStrand("AAAC"));
function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((sum, item) => sum + item) / array.length;
}
exports.findAverage = findAverage;
console.log(findAverage([]));
const reverseSeq = (n) => {
    let res = [];
    for (let i = n; i > 0; i--) {
        res.push(i);
    }
    return res;
};
exports.reverseSeq = reverseSeq;
console.log((0, exports.reverseSeq)(6));
function descendingOrder(n) {
    let sN = String(n).split('').map(s => +s).sort((a, b) => b - a).join('');
    return sN;
}
exports.descendingOrder = descendingOrder;
console.log(descendingOrder(123456789));
function feast(beast, dish) {
    return (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)) ? true : false;
}
exports.feast = feast;
console.log(feast("brown bear", "bear claw"));
function xo(str) {
    let countX = 0;
    let countO = 0;
    const arrS = str.split('');
    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i] === 'O' || arrS[i] === 'o') {
            countO++;
        }
        if (arrS[i] === 'x' || arrS[i] === 'X') {
            countX++;
        }
    }
    return (countO === countX) ? true : false;
}
exports.xo = xo;
console.log(xo('ooom'));
function between(a, b) {
    let arrNN = [];
    for (let i = a; i <= b; i++) {
        arrNN.push(i);
    }
    return arrNN;
}
exports.between = between;
console.log(between(-5, 2));
function getRealFloor(n) {
    return (n === 1 || n === 0) ? 0 : (n < 0) ? 0 : (n >= 0 && n <= 13) ? n - 1 : n - 2;
}
exports.getRealFloor = getRealFloor;
console.log(getRealFloor(-2));
function index(array, n) {
    return (n > array.length - 1) ? -1 : Math.pow(array[n], n);
}
exports.index = index;
console.log(index([5, 1, 9, 4], 4));
function litres(time) {
    return Math.floor((time / 2));
}
exports.litres = litres;
console.log(litres(6.7));
function findDifference(a, b) {
    return ((a[0] * a[1] * a[2]) > (b[0] * b[1] * b[2])) ? (a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]) : (b[0] * b[1] * b[2]) - (a[0] * a[1] * a[2]);
}
exports.findDifference = findDifference;
console.log(findDifference([3, 2, 5], [1, 4, 4]));
function capitalize(s) {
    return [s.split('').map((a, i) => (i % 2 === 0) ? a.toUpperCase() : a).join(''), s.split('').map((a, i) => (i % 2 !== 0) ? a.toUpperCase() : a).join('')];
}
exports.capitalize = capitalize;
console.log(capitalize('abcdef'));
function checkExam(array1, array2) {
    let count = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            count = count + 4;
        }
        if (array2[i] === '') {
            count = count + 1;
        }
        if (array1[i] !== array2[i]) {
            count = count - 1;
        }
    }
    return (count <= 0) ? 0 : count;
}
exports.checkExam = checkExam;
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
function findNb(m) {
    let total = 0;
    let n = 0;
    while (total < m) {
        n += 1;
        total += n ** 3;
    }
    return total === m ? n : -1;
}
exports.findNb = findNb;
console.log(findNb(4183059834009));
const xor = (a, b) => {
    return ((!a && !b) || (a && b)) ? false : true;
};
exports.xor = xor;
console.log((0, exports.xor)(true, false));
function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}
exports.greet = greet;
console.log(greet('Daniel', 'Daniel'));
function smallEnough(a, limit) {
    let count = 0;
    a.forEach(e => e <= limit ? count++ : count = count);
    return count === a.length ? true : false;
}
exports.smallEnough = smallEnough;
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
function hello(name = '') {
    return (name === '' || name.length === 0) ? 'Hello, World!' : `Hello, ${name[0].toUpperCase()}${name.slice(1, name.length).toLowerCase()}!`;
}
exports.hello = hello;
console.log(hello('johN'));
function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return 'nothing';
    }
    let lS = '';
    let nS = [];
    for (let i = 0; i < strarr.length; i++) {
        nS = strarr.slice(i, i + k);
        if (nS.join('').length > lS.length) {
            lS = nS.join('');
        }
    }
    return lS;
}
exports.longestConsec = longestConsec;
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
function doubleChar(str) {
    return str.split('').map(e => e + e).join('');
}
exports.doubleChar = doubleChar;
console.log(doubleChar("Adidas"));
function position(alphabet) {
    switch (alphabet) {
        case 'a':
            return 'Position of alphabet: 1';
        case 'b':
            return 'Position of alphabet: 2';
        case 'c':
            return 'Position of alphabet: 3';
        case 'd':
            return 'Position of alphabet: 4';
        case 'e':
            return 'Position of alphabet: 5';
        case 'f':
            return 'Position of alphabet: 6';
        case 'g':
            return 'Position of alphabet: 7';
        case 'h':
            return 'Position of alphabet: 8';
        case 'i':
            return 'Position of alphabet: 9';
        case 'j':
            return 'Position of alphabet: 10';
        case 'k':
            return 'Position of alphabet: 11';
        case 'l':
            return 'Position of alphabet: 12';
        case 'm':
            return 'Position of alphabet: 13';
        case 'n':
            return 'Position of alphabet: 14';
        case 'o':
            return 'Position of alphabet: 15';
        case 'p':
            return 'Position of alphabet: 16';
        case 'q':
            return 'Position of alphabet: 17';
        case 'r':
            return 'Position of alphabet: 18';
        case 's':
            return 'Position of alphabet: 19';
        case 't':
            return 'Position of alphabet: 20';
        case 'u':
            return 'Position of alphabet: 21';
        case 'v':
            return 'Position of alphabet: 22';
        case 'w':
            return 'Position of alphabet: 23';
        case 'x':
            return 'Position of alphabet: 24';
        case 'y':
            return 'Position of alphabet: 25';
        default:
            return 'Position of alphabet: 26';
    }
}
exports.position = position;
console.log(position('v'));
function rowWeights(arr) {
    if (arr.length === 1) {
        return [arr[0], 0];
    }
    let oneArr = arr.filter((e, i) => {
        if (i % 2 === 0) {
            return e;
        }
    }).reduce((sum, el) => sum + el);
    let twoArr = arr.filter((e, i) => {
        if (i % 2 !== 0) {
            return e;
        }
    }).reduce((sum, el) => sum + el);
    return [oneArr, twoArr];
}
exports.rowWeights = rowWeights;
console.log(rowWeights([1, 1, 0]));
function rowWeightsf(arr) {
    if (arr.length === 1) {
        return [arr[0], 0];
    }
    const onArr = [];
    const twArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            onArr.push(arr[i]);
        }
        else {
            twArr.push(arr[i]);
        }
    }
    const oneArr = onArr.reduce((sum, el) => sum + el);
    const twoArr = twArr.reduce((sum, el) => sum + el);
    return [oneArr, twoArr];
}
exports.rowWeightsf = rowWeightsf;
console.log(rowWeightsf([0, 1, 0]));
function bouncingBall(h, bounce, window) {
    if (h <= 0 || window >= h || bounce <= 0 || bounce >= 1) {
        return -1;
    }
    let see = -1;
    while (h > window) {
        see += 2;
        h = h * bounce;
    }
    return see;
}
exports.bouncingBall = bouncingBall;
console.log(bouncingBall(30, 0.4, 10));
const race = (v1, v2, g) => {
    if (v1 >= v2) {
        return null;
    }
    let time = g / (v2 - v1);
    const hour = Math.trunc(time);
    const miutes = Math.floor((time - hour) * 60);
    const sec = Math.floor((((time - hour) * 60) - miutes) * 60);
    return [hour, miutes, sec];
};
exports.race = race;
console.log((0, exports.race)(80, 91, 37));
function accum(s) {
    return s.split('').map((e, i) => e.repeat(i + 1)).map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join('-');
}
exports.accum = accum;
console.log(accum('ZpglnRxqenU'));
function angle(n) {
    return 180 * (n - 2);
}
exports.angle = angle;
console.log(angle(3));
function warnTheSheep(queue) {
    const newArr = queue.reverse();
    if (newArr[0] === 'wolf') {
        return 'Pls go away and stop eating my sheep';
    }
    let n = 0;
    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i] === 'wolf') {
            n = i;
        }
    }
    return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`;
}
exports.warnTheSheep = warnTheSheep;
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
function reverseWords(str) {
    return str.split(' ').map(e => e.split('').reverse().join('')).join(' ');
}
exports.reverseWords = reverseWords;
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
const findOdd = (xs) => {
    for (let i = 0; i < xs.length; i++) {
        const count = xs.filter(value => value === xs[i]).length;
        if (count % 2 == 1) {
            return xs[i];
        }
    }
    return -1;
};
exports.findOdd = findOdd;
console.log((0, exports.findOdd)([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
function printerError(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'n' || s[i] === 'o' || s[i] === 'p' || s[i] === 'q' || s[i] === 'r' || s[i] === 's' || s[i] === 't' || s[i] === 'u' || s[i] === 'v' || s[i] === 'w' || s[i] === 'x' || s[i] === 'y' || s[i] === 'z') {
            count++;
        }
    }
    return `${count} / ${s.length}`;
}
exports.printerError = printerError;
console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));
const stockList = (listOfArt, listOfCat) => {
    let res = [];
    for (let i = 0; i < listOfCat.length; i++) {
        for (let j = 0; j < listOfArt.length; j++) {
        }
    }
    return "...";
};
exports.stockList = stockList;
console.log((0, exports.stockList)(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
exports.goals = goals;
console.log(goals(5, 10, 2));
function comp(a1, a2) {
    if ((a1 === null || a1 === void 0 ? void 0 : a1.length) === 0 || (a2 === null || a2 === void 0 ? void 0 : a2.length) === 0) {
        return false;
    }
    return (a1 === null || a1 === void 0 ? void 0 : a1.map(e => e * e).sort().toString()) === (a2 === null || a2 === void 0 ? void 0 : a2.sort().toString());
}
exports.comp = comp;
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]));

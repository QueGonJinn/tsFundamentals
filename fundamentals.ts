export function findNeedle(haystack: any[]):string {
  return `found the needle at position ${haystack.findIndex(value => value === 'needle')}`
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

export function grow(arr: number[]): number {
  return arr.reduce((cur, item) => cur * item)
}

console.log(grow([4, 1, 1, 1, 4]));

export function correct(s: string): string{
  return s.split('').map(e => (e === '0') ? e = 'O' : (e === '5') ? e = 'S' : (e === '1') ? e = 'I' : e).join('');
}

console.log(correct('L0ND0N'));

export function expressionsMatter(a: number, b: number, c: number): number {
  const m1: number = a * b * c;
  const m2: number = (a + b) * c;
  const m3: number = a * (b + c);
  const m4: number = a + b + c;
  return Math.max(m1, m2, m3, m4);
}

console.log(expressionsMatter(1, 2, 3));

export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
 return Math.abs((dadYearsOld - sonYearsOld) * 2 - dadYearsOld);
}

console.log(twiceAsOld(36,7));

export function divisors(n: number) {
  let counter: number = 0
  for (let i = 0; i <= n; i++) {
	if (n % i === 0) {
	  counter++
	}
  }
  return counter;
}

console.log(divisors(64));

export function getSum(a: number, b: number): number {
  let sum = 0;
  if (a === b) {
	sum = a;
  }
  if (a < b) {
	  for (let i = a; i <= b; i++) {
	  sum = sum + i;
	}
  } else if (a > b) {
	  for (let i = b; i <= a; i++) {
	  sum = sum + i;
	}
	sum = sum + a;
  }
  
  return sum;
}

console.log(getSum(5, -10));

export function positiveSum(arr:number[]):number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
	  sum = sum + arr[i];
	}
  }
  return sum;
}

console.log(positiveSum([-1,2,3,4,-5]));

export const min = (list: number[]): number => {
  let min = list[0];
  for (let i = 0; i < list.length; i++)
	if (list[i] < min) {
	  min = list[i]
	}
  return min;
};

export const max = (list: number[]): number => {
  let max = list[0];
  for (let i = 0; i < list.length; i++)
	if (list[i] > max) {
	  max = list[i]
	}
  return max;
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));


export function duplicateCount(text: string): number {
  let map = new Map();
	  for (let i = 0; i < text.length; i++) {
		let char = text[i].toLowerCase();
		map.set(char, map.has(char) ? true : false);
	  }
  return [...map].filter(e => e[1]).length;

}

console.log(duplicateCount('aabbcde'));

export class Kata {
  static getCount(str: string): number {
	let reg = /^[aeiou]$/i;
	let count = 0;
	str.split('').forEach(e => {
	  (reg.test(e)) ? count++ : count;
	})
	return count
  }
}

console.log(Kata.getCount("abracadabra"));

export class Kata2 {
  static dnaStrand(dna: string) {
	return dna.split('').map((e) => (e === 'A') ? e = 'T' : (e === 'T') ? e = 'A' : (e === 'C') ? e = 'G' : (e === 'G') ? e = 'C' : e = e ).join('');
  }
}

console.log(Kata2.dnaStrand("AAAC"));

export function findAverage(array: number[]): number {
  if (array.length === 0) {
	return 0
  }
  return array.reduce((sum, item) => sum + item) / array.length;
}

console.log(findAverage([]));

export const reverseSeq = (n: number): number[] => {
  let res: number[] = [];
  for (let i = n; i > 0; i--) {
	res.push(i);
  }
  return res;
};

console.log(reverseSeq(6));


export function descendingOrder(n: number) {
  let sN = String(n).split('').map(s => +s).sort((a, b) => b - a).join('');
  return sN
}

console.log(descendingOrder(123456789));

export function feast(beast:string, dish:string):boolean {
  return (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)) ? true : false;
}

console.log(feast("brown bear", "bear claw"));

export function xo(str: string) {
  let countX = 0;
  let countO = 0;
  const arrS = str.split('');

  for (let i = 0; i < arrS.length; i++) {
	if (arrS[i] === 'O' || arrS[i] === 'o') {
	  countO++
	}
	if (arrS[i] === 'x' || arrS[i] === 'X') {
	  countX++
	}
  }
  return (countO === countX) ? true : false;
}
console.log(xo('ooom'));


export function between(a: number, b: number): number[] {
  let arrNN: number[] = [];
  for (let i = a; i <= b; i++) {
	arrNN.push(i)
  }
  return arrNN;
}

console.log(between(-5, 2));

export function getRealFloor(n: number): number {
  return (n === 1 || n === 0) ? 0 : ( n < 0 ) ? 0 : (n >= 0 && n <= 13) ? n - 1 : n - 2;
}

console.log(getRealFloor(-2));

export function index(array: number[], n: number): number {
  return (n > array.length - 1) ? -1 : Math.pow(array[n], n)
}

console.log(index([5,1,9,4], 4));

export function litres(time: number): number {
  return Math.floor((time / 2))
}

console.log(litres(6.7));

export function findDifference(a: [number, number, number], b: [number, number, number]): number{
  return ((a[0] * a[1] * a[2]) > (b[0] * b[1] * b[2])) ? (a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]) : (b[0] * b[1] * b[2]) - (a[0] * a[1] * a[2]);
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));


export function capitalize(s: string) {
  return [s.split('').map((a, i) => (i % 2 === 0) ? a.toUpperCase() : a).join(''), s.split('').map((a, i) => (i % 2 !== 0) ? a.toUpperCase() : a).join('')];
}

console.log(capitalize('abcdef'));

export function checkExam(array1: string[], array2: string[]): number {
 let count: number = 0;
  for (let i = 0; i < array1.length; i++){
	if (array1[i] === array2[i]) {
	  count = count + 4;
	}
	if (array2[i] === '') {
	  count = count + 1;
	} 
	if (array1[i] !== array2[i]){
	  count = count - 1;
	}
  }
 return (count <= 0) ? 0 : count;
}

console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));

export function findNb(m: number): number {
  let total: number = 0;
  let n: number = 0;

  while (total < m) {
	n += 1;
	total += n**3
  }

  return total === m ? n : -1;
}

console.log(findNb(4183059834009));



export const xor=(a:boolean, b:boolean):boolean => {
  return ((!a && !b) || (a && b) ) ? false : true;
}

console.log(xor(true, false));


export function greet(name: string, owner: string): string{
  return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Daniel', 'Daniel'));

export function smallEnough(a: number[], limit: number){
  let count: number = 0;
  a.forEach(e => e <= limit ? count++ : count = count);
  return count === a.length ? true : false;
}

console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));

export function hello(name = ''): string {
  return (name === '' || name.length === 0) ? 'Hello, World!' : `Hello, ${name[0].toUpperCase()}${name.slice(1, name.length).toLowerCase()}!`;
}

console.log(hello('johN'));

export function longestConsec(strarr: string[], k: number): string {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
	return 'nothing';
  }
  let lS = '';
  let nS = [];

  for (let i = 0; i < strarr.length; i++) {
	nS = strarr.slice(i, i + k)
	if (nS.join('').length > lS.length) {
		lS = nS.join('');
	}
  }
  return lS;
}

console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));


export function doubleChar(str: string): string{
  return str.split('').map(e => e + e).join('')
}

console.log(doubleChar("Adidas"));


export function position(alphabet:string):string {
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

console.log(position('v'));

export function rowWeights(arr: number[]) {
	if (arr.length === 1) {
		return [arr[0], 0];
	}

	let oneArr = arr.filter( (e, i) => {
		if (i % 2 === 0) {
			return e
		}
	}).reduce( (sum, el) => sum + el);

	let twoArr = arr.filter( (e, i) => {
		if (i % 2 !== 0) {
			return e
		}
	}).reduce( (sum, el) => sum + el)
	
	return [oneArr, twoArr];

}

console.log(rowWeights([1, 1, 0]));

export function rowWeightsf(arr: number[]) {
	if (arr.length === 1) {
		return [arr[0], 0];
	}
	const onArr = [];
	const twArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			onArr.push(arr[i])
		} else {
			twArr.push(arr[i])
		}
	}
	const oneArr = onArr.reduce( (sum, el) => sum + el);
	const twoArr = twArr.reduce( (sum, el) => sum + el);
	
	return [oneArr, twoArr];

}

console.log(rowWeightsf([0, 1, 0]));

export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || window >= h || bounce <= 0 || bounce >= 1) {
	return -1
  } 
  let see = -1;
  while (h > window) {
	see += 2;
	h = h * bounce;
  }

  return see
  
}

console.log(bouncingBall(30, 0.4, 10));

export const race = (v1:number, v2:number, g:number) => {
  if (v1 >= v2) {
	return null
  }
  let time = g / (v2 - v1);
  const hour = Math.trunc(time);
  const miutes = Math.floor((time - hour) * 60);
  const sec = Math.floor((((time - hour) * 60) - miutes) * 60);
  return [hour, miutes, sec];
}

console.log(race(80, 91, 37));


export function accum(s: string): string {
	return s.split('').map((e, i) => e.repeat(i+1)).map( e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join('-');
}

console.log(accum('ZpglnRxqenU'));

export function angle(n: number): number {
  return 180 * (n -2);
}

console.log(angle(3));


export function warnTheSheep(queue: string[]): string {
	const newArr = queue.reverse()
	if (newArr[0] === 'wolf') {
		return 'Pls go away and stop eating my sheep';
	}
	let n = 0;
	for (let i = 1; i < newArr.length; i++) {
		if (newArr[i] === 'wolf') {
			n = i;
		}
	}
	return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));


export function reverseWords(str: string): string {
	return str.split(' ').map(e => e.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

export const findOdd = (xs: number[]): number => {
  for (let i = 0; i < xs.length; i++) {
    const count = xs.filter(value => value === xs[i]).length;
    if (count % 2 == 1) {
        return xs[i];
    }
	
}
return -1
};

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

export function printerError(s: string): string {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
	if (s[i] === 'n' || s[i] === 'o' || s[i] === 'p' || s[i] === 'q' || s[i] === 'r' || s[i] === 's' || s[i] === 't' || s[i] === 'u' || s[i] === 'v' || s[i] === 'w' || s[i] === 'x' || s[i] === 'y' || s[i] === 'z') {
		count++
	}
  }
  return `${count} / ${s.length}`;
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));
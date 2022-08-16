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

export const stockList = (listOfArt:string[], listOfCat:string[]):string => {
  let res = [];
  for (let i = 0; i < listOfCat.length; i++) {
	for (let j = 0; j < listOfArt.length; j++) {
		
	}
  }
  return "..."
}

console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));

export function goals (laLigaGoals:number, copaDelReyGoals:number, championsLeagueGoals:number): number {
  return laLigaGoals + copaDelReyGoals	+ championsLeagueGoals;
}

console.log(goals(5, 10, 2));


export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1?.length === 0 || a2?.length === 0) {
	return false;
  } 
  return a1?.map(e => e * e).sort().toString() === a2?.sort().toString();
}


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]));

export function stairsIn20(stairs:number[][]) {
	let arr = []
	for (let i = 0; i < stairs.length; i++) {
		arr.push(stairs[i].reduce((s, e) => s + e));
 	}
	return arr.reduce ((sum, el) => sum + el)
}

  let sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
                7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
                5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
                6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
  monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
            6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
            5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
            7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
  tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
             7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
             7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
             5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
  wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
              5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
              5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
              9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
  thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
             9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
             9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
             7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
  friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
            6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
            9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
            5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
  saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
            5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
            5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
            7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];
  var stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

console.log(stairsIn20(stairs));


function hero (bullets: number, dragons: number): boolean  { return (bullets / 2 >= dragons) ? true : false;}
console.log(hero(1500, 751));


export function quarterOf(month: number): number {
  switch(month) {
      case 1:
      case 2:
      case 3:      
      return 1;
      case 4: 
	  case 5:
	  case 6:
	  return 2;	  
      case 7: 
	  case 8:
	  case 9:
	  return 3;	  
      default: 
	  return 4;
  }
}

console.log(quarterOf(11));
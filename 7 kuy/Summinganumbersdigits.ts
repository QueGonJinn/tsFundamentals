export function sumDigits(n: number):number {
	let s = n.toString()
	let num = s.split('').map( e => (Number.isFinite(+e) ? +e : 0)).reduce((sum, cur) => sum + cur);
	return num;
}

console.log(sumDigits(-12));
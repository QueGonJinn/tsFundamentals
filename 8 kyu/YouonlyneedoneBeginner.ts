export const check = (a: (number | string)[], x: number | string): boolean => {
	
	return a.includes(x); // your code here...
}

console.log(check(['t', 'e', 's', 't'], 'e'));
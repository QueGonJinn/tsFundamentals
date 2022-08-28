export function parse(data: string): number[] {
	let counter = 0;
	let result: number[] = [];
	data.split('').forEach((el) => {
		if (el === 'd') {
			counter--;
		}
		if (el === 'i') {
			counter++;
		}
		if (el === 's') {
			counter = counter**2;
		}
		if (el === 'o') {
			result.push(counter);
		}
	})
	
	return result;
}

console.log(parse('iioiiso'));
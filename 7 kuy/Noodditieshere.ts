export function noOdds(values: number[]): number[] {
	const newArr: number[] = [];
	for (let i = 0; i < values.length; i++) {
		if (values[i] % 2 === 0) {
			newArr.push(values[i])
		}
	}
	return newArr;
}

console.log(noOdds([0,1,2,3]));
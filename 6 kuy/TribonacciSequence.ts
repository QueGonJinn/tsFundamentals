export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
	const arrTri = [a, b, c];
	if ([a, b, c].length === 0 || n === 0) {
		return [];
	}
	if (n === 1) {
		return [a];
	}
  if (n === 2) {
    return [a, b];
  }
	for (let i = 2; i < n-1; i++) {
		arrTri.push((arrTri[i - 2] + arrTri[i - 1] + arrTri[i]));
	}
	return arrTri;
}

console.log(tribonacci([1, 1, 1], 10));
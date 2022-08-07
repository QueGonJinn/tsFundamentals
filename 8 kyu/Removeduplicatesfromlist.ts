export const distinct = (a: number[]): number[] => {
  return a.filter( (el, index) => {
	return a.indexOf(el) === index
  });
}

console.log(distinct([1, 1, 2, 2, 4, 3, 3]));

export const distinct2 = (a: number[]): number[] => {
	let ua: number[] = [];
	a.forEach(el => {
		if (!ua.includes(el)) {
			ua.push(el);
		}
	})
	return ua;
}

console.log(distinct2([1]));
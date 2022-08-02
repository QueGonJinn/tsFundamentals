export const towerBuilder = (nFloors: number): string[] => {
	let arrBuilder: string[] = [];
	for (let i = 0; i < nFloors; i++) {
		arrBuilder.push(`${' '.repeat(nFloors - (i+ 1))}${'*'.repeat((2*i) + 1)}${' '.repeat(nFloors - (i + 1))}`)
	}
	return arrBuilder;
}

console.log(towerBuilder(1));
export function wave(str: string): Array<string>{
  let arr: string[] = [];
  for (let i = 0; i < str.length; i++) {
	let letter = str[i];
	if (str[i] === ' ') {
		continue;
	} else {
		arr.push (str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
	}
  }
  return arr
}

console.log(wave('Two words'));
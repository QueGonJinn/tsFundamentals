export function solve(s: string) {
	return s.split(/[uoiea]/)
                          .map(s => s.split('')
                                     .reduce((acc, c) => acc + (c.charCodeAt(0) - 96), 0))
                          .sort((a, b) => b-a)[0];
}

console.log(solve('chruschtschov'));
export const primeFactors = (n:number): string => {
  let arr: number[] = [];
  let str = '';
  function cal(n: number) {
	if (n > 1) {
		for (let i = 2; i <= n; i++) {
			if ( n % 2 == 0) {
				arr.push(i);
				cal (n / i);
				return true;
			} 
		}
	}
	else {
		return true;
	}
	return arr
  }
  return arr.join(',')
}

console.log(primeFactors(7775460));
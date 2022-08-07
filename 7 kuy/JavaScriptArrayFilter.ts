export const getEvenNumbers = (numbersArray : number[]) : number[] => {
	return numbersArray.filter( e => e % 2 === 0);
}

console.log(getEvenNumbers([1,2,3,6,8,10]));
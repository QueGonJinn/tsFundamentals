export function lovefunc(flower1: number, flower2: number): boolean {
    return ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) ? true : false;
}

console.log(lovefunc(808, 20));
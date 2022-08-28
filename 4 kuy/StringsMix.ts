const collectData = (map: Map<any, any>, str: string, arraySequence: number) => {
	if (str?.match(/[a-z]/g)?.length !== 0) {
	str.match(/[a-z]/g) || []
    .forEach((v: any) => {
      const format = map.get(v) || {};
      format[arraySequence] = (format[arraySequence] || 0) + 1;
      format.max = Math.max(format[1] || 0, format[2] || 0);
      
      if (format[1] === format[2]) {
        format.greater = '=';
      } else {
        format.greater = (format[1] || 0) > (format[2] || 0) ? 1 : 2;
      }
      
      map.set(v, format);
    });
	}
  return map;
};


export const mix = (s1:string, s2:string): string =>{
	let map = collectData(new Map(), s1, 1);
	map = collectData(map, s2, 2);
 
  const sortedResult = [...map.entries()].sort((a, b) => {
    if (a[1].max < b[1].max) {
      return 1;
    }
    
    if (a[1].max === b[1].max) {
      if ((parseInt(a[1].greater) || 3) > (parseInt(b[1].greater) || 3)) {
        return 1;
      }
      
      if (a[1].greater === b[1].greater) {
        return a[0].localeCompare(b[0]);
      }
    }
    
    return -1;
  }).filter((v) => v[1].max > 1);
  
  return sortedResult.map((v) => `${v[1].greater}:${v[0].repeat(v[1].max)}`)
    .join('/');
}

console.log(mix("Are they here", "yes, they are here"));
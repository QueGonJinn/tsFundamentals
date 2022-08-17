export const encryptThis = (str: string): string => {
  if (str.length === 0) {
	return ''
  }
  if (str.length === 1) {
	return str.charCodeAt(0).toString();
  }
  const newStr = str.split(' ').map(e => (e.length === 1) ?  e[0].charCodeAt(0).toString() : (e.length === 2) ?  e[0].charCodeAt(0).toString() + e.slice(1) : e[0].charCodeAt(0).toString() + e.slice(e.length - 1) + e.slice(2, e.length - 1) + e.slice(1, 2)).join(' ');
  return newStr
}

console.log(encryptThis('A wise old owl lived in an oak'));
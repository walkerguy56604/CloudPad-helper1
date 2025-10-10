export function reverseText(str) {
  return str.split('').reverse().join('');
}

export function changeCase(str, mode) {
  switch (mode) {
    case 'upper': return str.toUpperCase();
    case 'lower': return str.toLowerCase();
    case 'title':
      return str.replace(/\w\S*/g, w => w[0].toUpperCase() + w.substring(1).toLowerCase());
    default: return str;
  }
}

export function countCharacters(str) {
  return str.length;
}

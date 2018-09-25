function countCharacters(string) {
  let stringNoSpaces = string.split(' ').join('');
  let result = {};
  for (let character of stringNoSpaces) {
    if (!result[character]) { result[character] = 1; break; }
    result[character]++;
  }
  return result;
}

console.log(countCharacters("lighthouse in the house"));
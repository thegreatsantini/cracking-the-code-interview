/*
Implent a method to preform string compression using the counts of repeated characters.

aabbcccccdd // => a2b2c5d2

if the new string does not become smaller than the original string, return the original string
*/

const stringCompression = ( str ) => {
  let letterCount = {};
  let compressedStr = '';

  for ( let char = 0; char < str.length; char ++ ) {
    if ( letterCount[str[char]] ) {
      letterCount[str[char]] ++;
    }
    else {
      letterCount[str[char]] = 1;
    }
  }

  for ( key in letterCount ) {
    compressedStr += key + letterCount[key];
  }
  return compressedStr
};

console.log(stringCompression('aabbcccccdd'));

/*
Assume you have a method isSubstring wich checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring ( e.g "waterbottle" => "erbottlewat" )
*/

const isSubstring = ( str1, str2 ) => {
  for ( let char = 0; char < str1.length; char ++ ) {
    console.log(str1.substring(char + 1, str1.length - char +1) + str1.slice(0, char+1) )
  }
  // return  str1.substring(1)  + str1.slice(0, 1)
};

// str1.slice(char, char + 1)
// console.log(isSubstring('waterbottle', 'erbottlewat'));

const str = 'water';

console.log(str.slice(str.length-2, str.length))
console.log(str.slice(2))
console.log(str.slice(3))
console.log(str.slice(4))
console.log(str.slice(1,str.length))
console.log('str;',str)

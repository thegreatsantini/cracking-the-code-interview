/*
Implement an ALgorithim to determind if a string has all unique characters
*/

const isUnique = (str) => {
  if ( str.length > 128  ) return false;
  for ( let i = 0; i < str.length; i++ ) {
    for ( let j = 0; j < str.length; j++ ) {
      if ( str[i] === str[j] && i != j) {
        return false;
      };
    };
  };
  return true;
};

console.log(isUnique('ab'));
console.log(isUnique('cheese'));
console.log(isUnique('chkenmasl'));
console.log(isUnique('tacotuesday'));

// Time: O(n^2)
// Space: O(1)

/*
Given two strings, write a method to decide if one is a permutation of the other
*/

// Assumpstions: case matters
const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let obj = {};

  for ( let i = 0; i < str1.length; i ++ ) {
    if ( obj[str1[i]] ) {
      obj[str1[i]] += 1
    }
    else {
      obj[str1[i]] = 1
    }
  }

  for ( let char = 0; char < str2.length; char++ ) {
    if ( !obj[str2[char]] ) {
      return false;
    }
    else if ( obj[str2[char]] > 1 ) {
      obj[str2[char]] -= 1;
    }
    else {
      delete obj[str2[char]];
    }
  }
  if ( Object.keys(obj).length === 0 ) {
    return true;
  }
};

console.log(checkPermutation('  dog', 'god  '))

// Space: O(n) copied string into Object
// Time: O(n) 

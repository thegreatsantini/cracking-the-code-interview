// str.charCodeAt(i)

// const oneAway = (str1, str2) => {
//   let str1Arr = str1.split('');
//   let str2Arr = str2.split('');
//
//   let uniCodeSum1 = str1Arr.map( (val, i) => str1.charCodeAt(i) ).
//   reduce( (accumlator, current) => {
//     return accumlator + current
//   })
//
//   let uniCodeSum2 = str2Arr.map( (val, i) => str2.charCodeAt(i) ).
//   reduce( (accumlator, current) => {
//     return accumlator + current
//   })
//   console.log(uniCodeSum1 - uniCodeSum2)
//   // if ( uniCodeSum1 - uniCodeSum2 > 96 || uniCodeSum1 - uniCodeSum2 < 123 ) {
//   //   return true;
//   // };
//   // return false;
// };

const oneAway = ( str1, str2 ) => {
  let objStr1 = {};
  let objStr2 = {};
  let differances = 0;

  for ( let char = 0; char < str1.length; char ++ ) {
    if ( objStr1[str1[char]] ) {
      objStr1[str1[char]] ++;
    }
    else {
      objStr1[str1[char]] = 1;
    }
  }

  for ( let char = 0; char < str2.length; char ++ ) {
    if ( objStr2[str2[char]] ) {
      objStr2[str2[char]] ++;
    }
    else {
      objStr2[str2[char]] = 1;
    }
  }

  for ( key in objStr1 ) {
    if ( objStr1[key] !== objStr2[key] ) {
      differances ++
    }
  }

  if ( differances >= 2 ) {
    return false;
  }
  else {
    return true;
  }

};

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'bale')); // true
console.log(oneAway('pale', 'bake')); // false

// Time: O(n)
// Space O(n)

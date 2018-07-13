// str.charCodeAt(i)

const oneAway = (str1, str2) => {
  let str1Arr = str1.split('');
  let str2Arr = str2.split(' ');

  let uniCodeSum1 = str1Arr.map( (val, i) => str1.charCodeAt(i) ).
  reduce( (accumlator, current) => {
    return accumlator + current
  })

  let uniCodeSum2 = str2Arr.map( (val, i) => str2.charCodeAt(i) ).
  reduce( (accumlator, current) => {
    return accumlator + current
  })
  console.log(uniCodeSum1)
  console.log(uniCodeSum2)
  console.log(uniCodeSum1 - uniCodeSum2)
};

console.log(oneAway('pale', 'ple'));
// console.log(oneAway('pales', 'pales'));
// console.log(oneAway('pale', 'bale'));
// console.log(oneAway('pale', 'bake'));

/*
Problem: Write a method to replace all spaces in a string with ‘%20’. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the “true” length of the string.

Assumptions:

Complexity:
 Space:
 Time:
*/

const URLify = (str, len) => {
  const regexp = /\W/g;
  return str.trim().replace(regexp, '%20');
}

console.log(URLify('Mr John Smith    ', 13));

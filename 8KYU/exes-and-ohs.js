/*
 ======= Problem Name: Exes and Ohs


 ======= Problem description:
  Check to see if a string has the same amount of 'x's and 'o's.
   The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

 ======= Solution:
*/
function XO(str) {
    const count = [...str.toLowerCase()].reduce((acc, char) => {
      if (char === 'x') acc.x++;
      if (char === 'o') acc.o++;
      return acc;
    }, { x: 0, o: 0 });
  
    return count.x === count.o;
  }

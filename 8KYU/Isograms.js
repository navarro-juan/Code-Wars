/*
 ======= Problem Name: 
 Isograms


 ======= Problem description:
  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

 ======= Solution:
*/

const isIsogram = str => {
    str = str.toLowerCase();
    let letters = new Set();
    for (let char of str) {
      if (letters.has(char)) {
        return false;
        }
      letters.add(char)
    }
    return true;
    }
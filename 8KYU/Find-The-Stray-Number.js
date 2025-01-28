/*
 ======= Problem Name: 
Find the stray number

 ======= Problem description:
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
 Write a method that takes the array as an argument and returns this "unique" number.

 ======= Solution:
*/
function stray(numbers) {
    let result = 0; // Start with 0, because XORing with 0 leaves the number unchanged
    for (let num of numbers) {
      result ^= num; // XOR each number with the result
    }
    return result; 
  }

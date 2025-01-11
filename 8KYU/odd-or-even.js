/*
 ======= Problem Name: 
Odd or Even? 

 ======= Problem description:
  Given a list of integers, determine whether the sum of its elements is odd or even.
  Give your answer as a string matching "odd" or "even".
  if the input array is empty consider it as: [0] array

 ======= Solution:
*/
function oddOrEven(array) {
    // add all the values from array
        let sum = array.reduce((a, b ) => a + b ,0)
    // check if sum is divisible by 2 and return if it is even or odd
    return sum % 2 === 0 ? "even" : "odd"
  }

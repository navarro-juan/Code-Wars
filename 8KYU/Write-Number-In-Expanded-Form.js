/*
 ======= Problem Name: 
Write Number in Expanded Form

 ======= Problem description:
  You will be given a number and you will need to return it as a string in Expanded Form. For example:
  12 would be returned as '10 + 2'

 ======= Solution:
*/
function expandedForm(num) {
    // Convert the number to a string
    const numStr = num.toString();
    const length = numStr.length; // get the length of the string
    const result = []; // declare a empty array for the result
  
    // loop through each digit
    for (let i = 0; i < length; i++) {
      const digit = numStr[i];
      const placeValue = Math.pow(10, length - i - 1); 
  
      if (digit !== '0') {
        result.push(digit * placeValue);
      }
    }
    return result.join(' + ');
  }

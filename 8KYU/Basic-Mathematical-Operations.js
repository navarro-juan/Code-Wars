/*
 ======= Problem Name: 
Basic Mathematical Operations

 ======= Problem description:
  
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.


 ======= Solution:
*/

function basicOp(operation, a, b){
    //if else statement to handle operaters
      if (operation === "+") {
      return a + b
    }
      else if (operation === "-") {
        return a - b 
      }
      else if (operation === "*") {
        return a * b
      }
      else if (operation === "/"){ 
      return a / b}
    }
//Instructions 
// Complete the square sum function so that it squares each number passed into it and then sums the results together.



// My Solution

function squareSum(numbers){
  return numbers.reduce ((sum,num) => sum + num * num, 0);
}
  
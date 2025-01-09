/*
    Problem Name: Calculate average
Calculate average

    Problem description:
    Write a function which calculates the average of the numbers in a given array.

    Note: Empty arrays should return 0.


    Solution:
    // [Your solution code goes here]
*/
const findAverage = array => (array.length === 0) ? 0 : array.reduce((x, y) => x + y, 0) / array.length

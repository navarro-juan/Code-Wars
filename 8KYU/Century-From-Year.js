/*
 ======= Problem Name: 
Century From Year

 ======= Problem description:
The first century spans from the year 1 up to and including the year 100,
 The second - from the year 101 up to and including the year 200, etc.
Given a year, return the century it is in.

 ======= Solution:
*/

function century(year) {
    return Math.ceil(year/100) 
  }
/*
 ======= Problem Name: 
Grasshopper - Grade book


 ======= Problem description:
  
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

 ======= Solution:
*/
function getGrade (s1, s2, s3) {
    // find the average
     let score = (s1 + s2 + s3) / 3 ;
     // return avg with letter grade
     let grade =    score >= 90 ?  "A" :
                    score >= 80  ?  "B" :
                    score >= 70  ?  "C" :
                    score >= 60  ?  "D" : "F"
                 return  grade
     }
              

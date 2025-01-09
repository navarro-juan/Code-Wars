/*
 ======= Problem Name: 
Counting Sheep  

 ======= Problem description:
  Consider an array/list of sheep where some sheep may be missing from their place.
   We need a function that counts the number of sheep present in the array (true means present).

For example,

 ======= Solution:
*/
const countSheeps = sheep => sheep.filter(Boolean).length;


/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

*/


function invert(array) {

  if (array.length === 0){
    return array
  }
return array.map(n=> n>0 ? -n : -n)
}
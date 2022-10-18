//Sum Mixed Array

/*Instructions
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
*/

//array of strings and nums
//return sum of all nums, with strings converted to nums

//change strings to numbers
//sum all nums
//return the sum

function sumMix(x){
  const sum = x.map(el => Number(el)).reduce(
  (previousValue, currentValue) => previousValue + currentValue, 0)
  return sum
}

//better
function sumMix(x){
  return x.reduce((a,c) => a + Number(c), 0)
}